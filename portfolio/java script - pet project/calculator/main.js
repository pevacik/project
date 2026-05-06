const buttons = document.querySelectorAll('.buttons');
const h1 = document.querySelector('h1');
let arr = []



buttons.forEach((item) => {
    item.addEventListener('click', () => {
        const value = item.innerText;

        if (value === 'Del') {
            arr.pop();
            updateDisplay();
        }
        else if (value === '=') {
            try {
                // Вычисляем результат
                const result = eval(arr.join(''));
                // Преобразуем результат в строку и обновляем массив
                arr = [result.toString()];
                // Обновляем отображение
                updateDisplay();
            } catch (error) {
                // Обработка ошибок вычисления
                arr = ['Ошибка'];
                updateDisplay();
            }
        } else {
            arr.push(value);
            updateDisplay();
        }

    })
})

function updateDisplay() {
    h1.innerText = arr.join('')
}

