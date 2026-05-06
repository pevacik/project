const addbtn = document.querySelector('.add_product');
const rembtn = document.querySelector('.remove_product');
const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('input');
getCategores()


function getCategores() {
    fetch('https://server.blasars.ru/api/categories')
        .then(response => response.json())
        .then(data => {
            data.body.forEach(body => {
                render(body.name)
            })
        })
        .catch(error => console.log(error))
}

function postGategory(nameCategory) {
    fetch('https://server.blasars.ru/api/category', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nameCategory,
        }),
    })
        .then(response => response.json())
        .then(message => console.log(message))
}






addbtn.addEventListener('click', () => {
    postGategory(input.value)
    input.value = '';
})







function render(name) {
    // wrapper.innerHTML = '';
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = name;
    div.append(h2);
    wrapper.append(div);
}




// button.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         getget(button.dataset.id)
//     })
// })

// button.addEventListener('click', async (e) => {
//     e.preventDefault();
//     const data = await Getresponse()
//     data.forEach(data => {
//         render(data.name)
//     });
// })







// function getget(id) {
//     if (id == '') {
//         return wrapper.innerHTML = `<div>
//         <h2>Товар не найден</h2>
//     </div>
// `
//     }
//     fetch('https://server.blasars.ru/api/get-product/' + id)
//         .then(response => response.json())
//         .then(data => {
//             render(data.body.name, data.body.price, data.body.description)
//         })
//         .catch(error => console.log(error))


// }



// function render(name, price, description) {
//     wrapper.innerHTML = '';
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     h2.innerText = name;
//     const h3 = document.createElement('h3');
//     h3.innerText = 'Стоимость товара - ' + price + ' руб.';
//     const p = document.createElement('p');
//     p.innerText = description;
//     div.append(h2, h3, p);
//     wrapper.append(div)
// }


// console.log(getget(1))

// async function Getresponse() {
//     const response = await fetch('https://server.blasars.ru/api/categories')
//     const data = await response.json()
//     return data.body
// };