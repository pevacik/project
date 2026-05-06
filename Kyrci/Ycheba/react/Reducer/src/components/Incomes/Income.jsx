import { useDispatch } from "react-redux";
import { delitIncomelist } from "../../redux/slice/IncomeSlice"

function Income({ id, name, amount }) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(delitIncomelist(id))
    }

    return (
        <div key={id} className="income">
            <p>{name}</p>
            <p>{amount} ₽</p>
            <button onClick={handleClick}  >Удалить</button>
        </div>
    )
}

export default Income;