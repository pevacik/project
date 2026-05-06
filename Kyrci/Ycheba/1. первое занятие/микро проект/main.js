
// Инициализация данных (если localStorage пуст)
if (!localStorage.getItem("sewingEntries")) {
    const initialEntries = [
        {
            id: 1,
            name: "Платье \"Астра\"",
            quantity: "1",
            client: "Марина Петрова",
            material: "Атлас + кружево",
            link: "https://drive.google.com/example1",
            price: "22 000 руб"
        },
        {
            id: 2,
            name: "Платье \"Астра\"",
            quantity: "1",
            client: "Елена К.",
            material: "Вискоза + кружево",
            link: "https://drive.google.com/example5",
            price: "по запросу"
        },
        {
            id: 3,
            name: "Жакет с вышивкой",
            quantity: "3",
            client: "Бренд \"LUMI\"",
            material: "Хлопок 100%",
            link: "https://drive.google.com/example2",
            price: "45 000 руб (весь тираж)"
        },
        {
            id: 4,
            name: "Свадебный капюшон",
            quantity: "1",
            client: "Анна С.",
            material: "Шифон + бисер",
            link: "https://drive.google.com/example3",
            price: ""
        }
    ];
    localStorage.setItem("sewingEntries", JSON.stringify(initialEntries));
    localStorage.setItem("currentId", "5");
}

// Загружаем данные
let entries = JSON.parse(localStorage.getItem("sewingEntries"));
let currentId = parseInt(localStorage.getItem("currentId")) || 5;

function renderTable() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
    entries.forEach(entry => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${entry.name}</td>
          <td>${entry.quantity}</td>
          <td>${entry.price || "—"} </td>
          <td>${entry.client}</td>
          <td>${entry.material}</td>
          <td><span class="link" onclick="openLink('${entry.link}')">Открыть папку</span></td>
          
        `;
        tbody.appendChild(tr);
    });
}

function addEntry() {
    const name = document.getElementById("name").value.trim();
    const quantity = document.getElementById("quantity").value;
    const client = document.getElementById("client").value.trim();
    const material = document.getElementById("material").value.trim();
    const link = document.getElementById("link").value.trim();
    const price = document.getElementById("price").value.trim();

    if (!name || !quantity || !client || !material || !link) {
        alert("Заполните обязательные поля! (Стоимость — опционально)");
        return;
    }

    const newEntry = {
        id: currentId++,
        name,
        quantity,
        client,
        material,
        link,
        price: price || "—"
    };

    entries.push(newEntry);
    localStorage.setItem("sewingEntries", JSON.stringify(entries));
    localStorage.setItem("currentId", currentId);

    renderTable();

    // Очистить форму
    document.getElementById("name").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("client").value = "";
    document.getElementById("material").value = "";
    document.getElementById("link").value = "";
    document.getElementById("price").value = "";
}

function openLink(url) {
    window.open(url, "_blank");
}

// Инициализация таблицы
renderTable();