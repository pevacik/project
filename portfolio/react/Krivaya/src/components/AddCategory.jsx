import { useState } from "react";
import { v4 as uuid } from "uuid";

function AddCategory({ catigories, setCatigories }) {

    const [name, setName] = useState('')

    function addButton(e) {
        e.preventDefault();

        setCatigories([...catigories, { id: uuid(), name, }])
    }

    console.log('Компонента  AddCategory')
    return (
        <div className="indent" >

            <h2>Добавить категорию</h2>


            <form >
                <input type="text" placeholder="Введите название категории" onChange={(e) => {
                    setName(e.target.value)
                }} />
                <button onClick={addButton}  >Добавить</button>
            </form>


        </div>
    )
}

export default AddCategory