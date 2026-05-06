// Main
const loading = document.querySelector('.loading'),
      start = document.querySelector('.start'),
      game = document.querySelector('.game'),
      loadingLine = loading.querySelector('.loading_line'), // loading
      buttonGameStart = document.querySelector('.button_game_start'); // производим поиск кнопки 'Начать игру'
      

let move = true; // определяет чей ход, true - ход крестика, false - ход нолика
let step = 0; // количество ходов



// loading
loadingLine.addEventListener('animationend', () => {
    loading.classList.remove('active');
    start.classList.add('active');
});

// вешаем событие 'click' на кнопку
buttonGameStart.addEventListener('click', () => {
    popup('popup_start_game', addPlayerData);
    gameStart();
}); 



/*
    Выводит уведомления на страницу
        text - текст уведомления
        type - тип уведомления (error - ошибка, ok - успешно, notice - стандартное уведомление)
*/
function notice(text, type = 'error') {
    const classIcons = {
        'error': 'ti-bell-x',
        'ok': 'ti-bell-check',
        'notice': 'ti-bell',
    }

    const colorIcon = type == 'error' ? 'var(--color)' : type == 'ok' ? 'var(--color-optional)' : 'var(--color-text)';

    const notices = document.querySelector('.notices')
    const newNotice = document.createElement('div');
    newNotice.classList.add('notice');

    const noticeContent = `
        <i class="ti ${classIcons[type]}" style="color: ${colorIcon}"></i>
        <p class="notice_text">${text}</p>
    `;

    newNotice.insertAdjacentHTML('afterbegin', noticeContent);
    notices.prepend(newNotice);

    setTimeout(() => newNotice.classList.add('active'));

    setTimeout(() => {
        newNotice.classList.remove('active');
        setTimeout(newNotice.remove(), 1000);
    }, 3000);
}




/*
    Вызывает всплывающее окно с указанным классом
        classPopup - класс всплывающего окна
        callback - функция, которая сработает при открытии окна
*/
function popup(classPopup, callback = () => {}) {
    const popup = document.querySelector('.' + classPopup);
    popup.classList.add('active');
    const popupClose = popup.querySelectorAll('.popup_close');
    popupClose.forEach(close => {
        close.addEventListener('click', () => {
            popup.classList.remove('active');
        });
    });
    callback(popup);
}



/*
    Изменяет данные игроков
        playerNumber - номер игрока 1 или 2
        data - объект {name, turn}, имя игрока и чей ход
        active - true или false, если true класс active добавляется, false класс active удаляется
*/
function setPlayerData(playerNumber, data) {
    const player = document.querySelector('.player_' + playerNumber);
    const playerName = player.querySelector('.player_name');
    const playerTurn = player.querySelector('.player_turn');

    if(data.name) playerName.innerText = data.name;
    if(data.turn) playerTurn.innerText = data.turn;
    data.active ? playerTurn.classList.add('active') : playerTurn.classList.remove('active')
}



function addPlayerData(popupBlock) {
    // производим поиск элементов формы
    const inputName = popupBlock.querySelector('.input_name');
    const inputNameFriend = popupBlock.querySelector('.input_name_friend');
    const buttonPopupStartGame = popupBlock.querySelector('.button_popup_start_game');

    // вешаем событие 'click' на кнопку 
    buttonPopupStartGame.addEventListener('click', (e) => {
        e.preventDefault(); // отменяем отправку формы
        // произволим проверку, заполнено ли первое имя
        if(inputName.value) {
            // произволим проверку, заполнено ли второе имя
            if(inputNameFriend.value) {
                // получаем значения из полей и добавляем их в заголовки пользователе
                setPlayerData(1, {name: inputName.value})
                setPlayerData(2, {name: inputNameFriend.value})
                // скрываем блок начало игры
                start.classList.remove('active');
                // отображаем блок с игрой
                game.classList.add('active');
                // закрываем всплывающее окно
                popupBlock.classList.remove('active');
            } else {
                inputNameFriend.style.border = '1px solid red';
            }
        } else {
            inputName.style.border = '1px solid red';
        }
    });
}



function makeMove() {
    // проверяем, если в ячейке нет крестика или нолика
    if(!this.classList.contains('crose') && !this.classList.contains('zero')) {

        // определяем, что необходимо поставить крестик или нолик
        // если move возвращает true ставим крестик, иначе нолик
        // выводим текст у пользователей
        if(move) {
            this.classList.add('crose');
            notice('Ход выполнил - X', 'ok');
            setPlayerData(1, {turn: 'Ожидайте', active: false})
            setPlayerData(2, {turn: 'Ваш ход', active: true})
        } else {
            this.classList.add('zero');
            notice('Ход выполнил - O', 'ok');
            setPlayerData(1, {turn: 'Ваш ход', active: true})
            setPlayerData(2, {turn: 'Ожидайте', active: false})
        }

        move = !move; // изменяем значение переменной move на противоположное значение
        step++; // увеличиваем stap на единицу

        // объявляем победителя в всплывающем окне
    } else {
        notice('Ход уже выполнин');
    }
}


/*
    Старт игры
*/
function gameStart() {
    // находим все ячейки
    const playingFieldCols = document.querySelectorAll('.playing_field_col');
    // перебираем массив со всеми ячейками
    playingFieldCols.forEach(col => {
        // вешаем события на все ячейки
        col.addEventListener('click', makeMove);
    });
}


