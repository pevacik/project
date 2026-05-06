import { useDispatch } from "react-redux"
import { delitExpenseList } from "../../redux/slice/expenseSlice"

function Expense({ id, name, amount }) {

    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(delitExpenseList(id))
    }

    return (
        <div className="expense">
            <p>{name}</p>
            <p>{amount} ₽</p>
            <button onClick={handleClick} >Удалить</button>
        </div>
    )
}

export default Expense;