import { addTaskSlice } from "../redux/slice/taskSlice"
import { useDispatch } from "react-redux"

function FormAddTast() {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name")
        const id = Date.now()
        dispatch(addTaskSlice({ id, name }))
        e.target.reset()
    }
    return (
        <div className="indent">
            <h2>Добавить задачу</h2>
            <form onSubmit={handleClick} >
                <input
                    type="text"
                    placeholder="Введите задачу"
                    name="name"
                />
                <button>Добавить</button>
            </form>
        </div>
    )
}

export default FormAddTast