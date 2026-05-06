function DltCategory({ id, setCatigories, catigories }) {


    function dltCategory(id) {
        const question = confirm('Вы действительно хотите удалить?')
        if (!question) return
        let arr = catigories.filter((item) => {
            if (item.id != id) {
                return item
            }
        })
        setCatigories(arr)

    }

    return (

        <button onClick={() => { dltCategory(id) }} >Удалить категорию</button>


    )
}

export default DltCategory