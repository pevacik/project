



const categories = document.querySelector('.wrapper');
const button = document.querySelector('.add_product');
const input = document.querySelector('input');
render()


async function getCategories() {
    const response = await fetch('https://server.blasars.ru/api/categories')
    const data = await response.json();
    console.log(data.body)
    return data.body
}


button.addEventListener('click', (e) => {
    e.preventDefault();
    const name = input.value.trim();
    if (!name) return;
    postcategories(name);
    input.value = '';
})


async function render() {
    const data = await getCategories()
    categories.innerHTML = ''
    data.forEach((data) => {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = data.name;
        const delbtn = document.createElement('button');
        delbtn.innerText = 'Удалить';
        delbtn.addEventListener('click', () => {
            const question = confirm('Вы действительно хотите удалить категорию?');
            if (!question) return;
            deleteCategory(data.id);
            render();
        })
        div.append(h2, delbtn);
        categories.append(div);
    })


}


function deleteCategory(id) {
    fetch('https://server.blasars.ru/api/category/' + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => console.log(data))
}


function postcategories(name) {
    fetch('https://server.blasars.ru/api/category', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (!data.body) throw new Error('Категория не создана');
            alert(data.message);
            render();
        })
}
























// render();

// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     const name = input.value.trim();
//     if(!name) return;
//     createCategory(name);
//     input.value = '';
// })

// async function render() {
//     const data = await getCategories();

//     categories.innerHTML = '';

//     data.body.forEach(category => {
//         const div = document.createElement('div');
//         div.classList.add('category');
//         const h3 = document.createElement('h3');
//         h3.innerText = category.name;
//         const buttonDelete = document.createElement('button');
//         buttonDelete.innerText = 'Удалить';
//         buttonDelete.addEventListener('click', () => {
//             const question = confirm('Вы действительно хотите удалить категорию?');
//             if(!question) return;
//             deleteCategory(category.id);
//         });
//         div.append(h3, buttonDelete);
//         categories.append(div);
//     })
// }

// async function getCategories() {
//     const response = await fetch('https://server.blasars.ru/api/categories')
//     const data = await response.json();
//     return data;
// }

// function createCategory(categoryName) {
//     fetch('https://server.blasars.ru/api/category', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             name: categoryName,
//         }),
//     })
//         .then(response => response.json())
//         .then(data => {
//             if(!data.body) throw new Error('Категория не создана');
//             alert(data.message);
//             render();
//         })
//         .catch(error => {
//             console.error(error);
//             alert(error.message);
//         });
// }

// function deleteCategory(id) {
//     fetch('https://server.blasars.ru/api/category/' + id, {
//         method: 'DELETE'
//     })
//         .then(response => response.json())
//         .then(data => {
//             if(!data.body) throw new Error('Категория не найдена');
//             alert(data.message);
//             render();
//         })
//         .catch(error => {
//             console.error(error);
//             alert(error.message);
//         });
// }