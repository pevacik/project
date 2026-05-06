const categories = document.querySelector('.wrapper');
const button = document.querySelector('.add_product');
const input = document.querySelector('input');
const respAxios = axios.create({
    baseURL: 'https://server.blasars.ru/api/',
    headers: { 'Content-Type': 'application/json' },
});


render()
getCategories()

async function getCategories() {
    try {
        const response = await respAxios('categories')

        return response.data.body
    } catch (error) {
        console.error(error)
        return [];
    }

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
    respAxios.delete(`category/${id}`)


}


async function postcategories(name) {
    try {
        const response = await respAxios.post('category', { name }); // ✅ не нужно stringify
        console.log('Категория создана:', response.data);
        alert(response.data.message || 'Категория добавлена');
    } catch (error) {
        console.error('Ошибка создания:', error);
        alert('Не удалось создать категорию');
    }
    render();
}





