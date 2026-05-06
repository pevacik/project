import FormAddExpense from "./FormAddExpense";
import Expense from "./Expense";
import { useSelector } from "react-redux";

function Expenses() {

    const expenses = useSelector((state) => {

        return state.expenses.expenseslist
    });


    return (
        <div className="expenses">
            <FormAddExpense />

            <h2>Расходы</h2>
            {expenses.length ? (
                expenses.map((expense) => (
                    <Expense
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        amount={expense.amount}
                    />
                ))
            ) : (
                <p className="text_not_data">Нет расходов</p>
            )}

        </div>
    )
}

export default Expenses;