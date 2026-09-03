"use strict";

/* =============================================================
 * Помощник «Одеться по погоде»
 * Данные: Open-Meteo (бесплатно, без ключа)
 * ============================================================= */

const OPEN_METEO = {
    geocoding: "https://geocoding-api.open-meteo.com/v1/search",
    forecast: "https://api.open-meteo.com/v1/forecast",
};

// Эксклюзивные слои одежды (показывается только один из категории)
const TOP_LAYERS = ["top-tshirt", "top-tank", "top-longsleeve", "top-jacket", "top-windbreaker", "top-coat", "top-rainjacket"];
const BOTTOM_LAYERS = ["bottom-shorts", "bottom-pants", "bottom-thermal", "bottom-sportshorts", "bottom-tights"];
const FEET_LAYERS = ["feet-sneakers", "feet-boots"];
const HEAD_LAYERS = ["head-cap", "head-beanie"];

// Независимые аксессуары (могут комбинироваться)
const ACCESSORIES = ["acc-umbrella", "acc-gloves", "acc-scarf", "acc-sunglasses"];

const ALL_CLOTH_LAYERS = [
    ...TOP_LAYERS,
    ...BOTTOM_LAYERS,
    ...FEET_LAYERS,
    ...HEAD_LAYERS,
    ...ACCESSORIES,
];

// Подписи и иконки для каждого предмета одежды
const CLOTHES_INFO = {
    "top-tshirt": { label: "Футболка", icon: "👕" },
    "top-tank": { label: "Майка", icon: "🎽" },
    "top-longsleeve": { label: "Лонгслив / кофта с рукавом", icon: "👔" },
    "top-jacket": { label: "Куртка", icon: "🧥" },
    "top-windbreaker": { label: "Ветровка", icon: "🧥" },
    "top-coat": { label: "Зимнее пальто / пуховик", icon: "🧥" },
    "top-rainjacket": { label: "Дождевик", icon: "🧥" },

    "bottom-shorts": { label: "Шорты", icon: "🩳" },
    "bottom-pants": { label: "Брюки / джинсы", icon: "👖" },
    "bottom-thermal": { label: "Тёплые штаны", icon: "👖" },
    "bottom-sportshorts": { label: "Беговые шорты", icon: "🩳" },
    "bottom-tights": { label: "Тайтсы / лосины", icon: "👖" },

    "feet-sneakers": { label: "Кроссовки", icon: "👟" },
    "feet-boots": { label: "Ботинки / сапоги", icon: "👢" },

    "head-cap": { label: "Кепка", icon: "🧢" },
    "head-beanie": { label: "Шапка", icon: "🧣" },

    "acc-umbrella": { label: "Зонт", icon: "☔" },
    "acc-gloves": { label: "Перчатки", icon: "🧤" },
    "acc-scarf": { label: "Шарф", icon: "🧣" },
    "acc-sunglasses": { label: "Солнцезащитные очки", icon: "🕶️" },
};

// Состояние
let state = {
    temperature: null,
    windSpeed: null,
    weatherCode: null,
    precipitation: null,
    locationName: null,
    sportMode: false,
};

/* ---------- DOM ---------- */
const cityInput = document.getElementById("cityInput");
const searchForm = document.getElementById("searchForm");
const geoBtn = document.getElementById("geoBtn");
const sportToggle = document.getElementById("sportToggle");
const weatherLocation = document.querySelector(".weather__location");
const weatherTemp = document.querySelector(".weather__temp");
const weatherDesc = document.querySelector(".weather__desc");
const weatherMeta = document.getElementById("weatherMeta");
const adviceList = document.getElementById("adviceList");



/* ---------- Классификация ---------- */
function temperatureBand(temp) {
    if (temp >= 25) return "hot";
    if (temp >= 18) return "warm";
    if (temp >= 10) return "mild";
    if (temp >= 0) return "cool";
    return "cold";
}

function weatherType(code, windSpeed) {
    // Точечные коды снега (71,73,75,77 — снег/снежная крупа; 85,86 — снежные заряды)
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
    if (
        (code >= 51 && code <= 67) || // морось, дождь, ледяной дождь
        (code >= 80 && code <= 82) || // ливневые дожди
        (code >= 95 && code <= 99) // грозы
    ) {
        return "rain";
    }
    if (windSpeed >= 20) return "wind"; // порог для ветровки
    return "clear";
}

function describeWeather(code) {
    const map = {
        0: "ясно", 1: "в основном ясно", 2: "переменная облачность", 3: "пасмурно",
        45: "туман", 48: "иней / туман",
        51: "лёгкая морось", 53: "морось", 55: "сильная морось",
        56: "лёгкая ледяная морось", 57: "ледяная морось",
        61: "небольшой дождь", 63: "дождь", 65: "сильный дождь",
        66: "лёгкий ледяной дождь", 67: "ледяной дождь",
        71: "небольшой снег", 73: "снег", 75: "сильный снег", 77: "снежная крупа",
        80: "лёгкий ливень", 81: "ливень", 82: "сильный ливень",
        85: "небольшой снегопад", 86: "снегопад",
        95: "гроза", 96: "гроза с градом", 99: "гроза с сильным градом",
    };
    return map[code] || "осадки";
}

/* ---------- Подбор одежды ---------- */
function addAcc(accessories, id) {
    const list = Array.isArray(accessories) ? [...accessories] : [];
    if (!list.includes(id)) list.push(id);
    return list;
}

function baseOutfit(band, sport) {
    if (sport) {
        switch (band) {
            case "hot":
                return { top: "top-tank", bottom: "bottom-sportshorts", feet: "feet-sneakers", accessories: ["acc-sunglasses"], head: "head-cap" };
            case "warm":
                return { top: "top-tank", bottom: "bottom-sportshorts", feet: "feet-sneakers", accessories: [], head: null };
            case "mild":
                return { top: "top-longsleeve", bottom: "bottom-sportshorts", feet: "feet-sneakers", accessories: [], head: null };
            case "cool":
                return { top: "top-longsleeve", bottom: "bottom-tights", feet: "feet-sneakers", accessories: [], head: null };
            case "cold":
                return { top: "top-jacket", bottom: "bottom-tights", feet: "feet-boots", accessories: ["acc-gloves"], head: "head-beanie" };
            default:
                return { top: "top-tshirt", bottom: "bottom-sportshorts", feet: "feet-sneakers", accessories: [], head: null };
        }
    }

    switch (band) {
        case "hot":
            return { top: "top-tshirt", bottom: "bottom-shorts", feet: "feet-sneakers", accessories: ["acc-sunglasses"], head: "head-cap" };
        case "warm":
            return { top: "top-tshirt", bottom: "bottom-pants", feet: "feet-sneakers", accessories: [], head: null };
        case "mild":
            return { top: "top-longsleeve", bottom: "bottom-pants", feet: "feet-sneakers", accessories: [], head: null };
        case "cool":
            return { top: "top-jacket", bottom: "bottom-pants", feet: "feet-sneakers", accessories: [], head: null };
        case "cold":
            return { top: "top-coat", bottom: "bottom-pants", feet: "feet-boots", accessories: ["acc-scarf", "acc-gloves"], head: "head-beanie" };
        default:
            return { top: "top-tshirt", bottom: "bottom-pants", feet: "feet-sneakers", accessories: [], head: null };
    }
}

function chooseOutfit(weather, sport) {
    const band = temperatureBand(weather.temperature);
    const type = weatherType(weather.weatherCode, weather.windSpeed);
    const o = baseOutfit(band, sport);

    if (type === "snow") {
        // Зимняя одежда независимо от температуры
        if (sport) {
            o.top = "top-jacket";
            o.bottom = "bottom-tights";
            o.feet = "feet-boots";
            o.head = "head-beanie";
            o.accessories = ["acc-gloves"];
        } else {
            o.top = "top-coat";
            o.bottom = "bottom-thermal";
            o.feet = "feet-boots";
            o.head = "head-beanie";
            o.accessories = ["acc-gloves", "acc-scarf"];
        }
        return { ...o, note: "На улице снег — нужна зимняя одежда" };
    }

    if (type === "rain") {
        if (sport) {
            // На пробежке зонт неудобен — вместо него дождевик
            o.top = "top-rainjacket";
            if (band === "cold" || band === "cool") o.feet = "feet-boots";
            return { ...o, note: "Дождь — бегите в дождевике, зонт не берите" };
        }
        // Обычный режим: зонт + подходящая по теплу обувь
        o.accessories = addAcc(o.accessories, "acc-umbrella");
        if (band === "cold" || band === "cool" || band === "mild") o.feet = "feet-boots";
        return { ...o, note: "Идёт дождь — возьмите зонт" };
    }

    if (type === "wind") {
        // Ветер — сверху ветровка (если не холоднее, иначе куртка теплее)
        if (band === "hot" || band === "warm" || band === "mild") {
            o.top = "top-windbreaker";
        }
        return { ...o, note: "Ветрено — наденьте ветровку" };
    }

    // Ясная/облачная погода
    if (band === "hot" || band === "warm") {
        o.accessories = addAcc(o.accessories, "acc-sunglasses");
    }
    return o;
}


/* ---------- Рендер ---------- */
function renderFigure(outfit) {
    ALL_CLOTH_LAYERS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.classList.remove("is-visible");
    });

    const show = (id) => {
        const el = document.getElementById(id);
        if (el) el.classList.add("is-visible");
    };

    show(outfit.top);
    show(outfit.bottom);
    show(outfit.feet);
    if (outfit.head) show(outfit.head);
    (outfit.accessories || []).forEach(show);
}

function renderAdvice(outfit) {
    adviceList.innerHTML = "";

    const parts = [];
    if (outfit.head) parts.push(CLOTHES_INFO[outfit.head]);
    (outfit.accessories || []).forEach((id) => parts.push(CLOTHES_INFO[id]));
    parts.push(CLOTHES_INFO[outfit.top]);
    parts.push(CLOTHES_INFO[outfit.bottom]);
    parts.push(CLOTHES_INFO[outfit.feet]);

    parts.forEach((info) => {
        if (!info) return;
        const li = document.createElement("li");
        const icon = document.createElement("span");
        icon.className = "icon";
        icon.textContent = info.icon;
        const label = document.createElement("span");
        label.textContent = info.label;
        li.appendChild(icon);
        li.appendChild(label);
        adviceList.appendChild(li);
    });

    if (outfit.note) {
        const li = document.createElement("li");
        li.style.background = "#fff3e0";
        li.style.fontWeight = "600";
        li.textContent = "⚠️ " + outfit.note;
        adviceList.appendChild(li);
    }
}

function render() {
    if (state.temperature === null) return;

    const weather = {
        temperature: state.temperature,
        windSpeed: state.windSpeed,
        weatherCode: state.weatherCode,
        precipitation: state.precipitation,
    };

    const outfit = chooseOutfit(weather, state.sportMode);
    renderFigure(outfit);
    renderAdvice(outfit);

    // Погодная сводка
    weatherLocation.textContent = state.locationName || "Текущее местоположение";
    weatherTemp.textContent = `${Math.round(state.temperature)}°C`;
    weatherDesc.textContent = describeWeather(state.weatherCode);
    const windText = `Ветер ${Math.round(state.windSpeed)} км/ч`;
    const precipText = state.precipitation > 0 ? ` · Осадки ${state.precipitation} мм` : "";
    weatherMeta.textContent = `${windText}${precipText}`;
}

/* ---------- Загрузка данных ---------- */
async function fetchWeather(lat, lon, locationName) {
    const url = new URL(OPEN_METEO.forecast);
    url.searchParams.set("latitude", lat);
    url.searchParams.set("longitude", lon);
    url.searchParams.set(
        "current",
        "temperature_2m,apparent_temperature,wind_speed_10m,weather_code,precipitation"
    );
    url.searchParams.set("timezone", "auto");

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Ошибка запроса: ${res.status}`);
    const data = await res.json();

    if (!data.current) throw new Error("Нет данных о погоде");

    const cur = data.current;
    state.temperature = cur.temperature_2m;
    state.windSpeed = cur.wind_speed_10m;
    state.weatherCode = cur.weather_code;
    state.precipitation = cur.precipitation ?? 0;
    state.locationName = locationName;

    render();
}

async function geocodeCity(name) {
    const url = new URL(OPEN_METEO.geocoding);
    url.searchParams.set("name", name);
    url.searchParams.set("count", "1");
    url.searchParams.set("language", "ru");

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Ошибка геокодинга: ${res.status}`);
    const data = await res.json();

    if (!data.results || data.results.length === 0) {
        throw new Error(`Город «${name}» не найден`);
    }

    const place = data.results[0];
    return {
        lat: place.latitude,
        lon: place.longitude,
        name: `${place.name}${place.country ? ", " + place.country : ""}`,
    };
}

function loadCity(name) {
    geocodeCity(name)
        .then((place) => fetchWeather(place.lat, place.lon, place.name))
        .catch((err) => {
            weatherDesc.textContent = err.message;
            weatherMeta.textContent = "Проверьте название и повторите попытку";
        });
}

function useGeolocation() {
    if (!navigator.geolocation) {
        loadCity("Москва");
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            fetchWeather(pos.coords.latitude, pos.coords.longitude, "Текущее местоположение");
        },
        () => loadCity("Москва"),
        { timeout: 8000 }
    );
}

/* ---------- События ---------- */
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = cityInput.value.trim();
    if (name) loadCity(name);
});

geoBtn.addEventListener("click", () => {
    weatherDesc.textContent = "Определяем местоположение…";
    useGeolocation();
});

sportToggle.addEventListener("change", () => {
    state.sportMode = sportToggle.checked;
    render();
});

/* ---------- Старт ---------- */
useGeolocation();
