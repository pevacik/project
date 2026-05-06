import { useDispatch } from "react-redux";
import { addExpenseList } from "../../redux/slice/expenseSlice"

function FormAddExpense() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const amount = Number(formData.get("amount"));
        const id = Date.now()
        dispatch(addExpenseList({ id, name, amount }))
        e.target.reset()


    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name="name" placeholder="Название" />
            <input type="number" name="amount" placeholder="Сумма" />
            <button>Добавить</button>
        </form>
    )
}

export default FormAddExpense;