const hello = () => {

    let i = true;
    while (i) {
        // запрашиваем имя пользователя
        const getName = prompt('Введите имя');

        // // производим проверку
        // if(getName && !Number(getName)) {
        //     i = !i;
        //     alert( 'Привет, ' + getName );

        // }
        getName && !+getName ? alert('Привет, ' + getName) : hello();
    }

}

// console.log(hello())



// товар 1
const product_1 = {
    name: 'Товар 1', // название товара
    price: 1000, // стоимость товара
    sale: false, // стоимость товара по акции
    getPrice: function (name, price, sale) {
        name = this.name;
        price = this.price
        sale = this.sale
        return sale ? price - sale : price
    }
}
// товар 2
const product_2 = {
    name: 'Товар 2', // название товара
    price: 2000, // стоимость товара
    sale: 1500, // стоимость товара по акции
    getPrice: function (name, price, sale) {
        name = this.name;
        price = this.price
        sale = this.sale
        return sale ? price - sale : price
    },
}

console.log(product_1.getPrice())
function calc() {
  let value = 100;
}

console.log(value);