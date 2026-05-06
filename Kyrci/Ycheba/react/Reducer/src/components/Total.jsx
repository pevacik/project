import { data as dataExspense } from "../redux/slice/expenseSlice";
import { data as dataIncome } from "../redux/slice/IncomeSlice";

function Total() {
    console.log(dataExspense.expenseslist);

    const expensesSum = dataExspense.expenseslist.reduce((prev, item) => {
        return prev + item.amount;
    }, 0);
    const incomesSum = dataIncome.incomelist.reduce((prev, item) => {
        return prev + item.amount;
    }, 0);

    return (
        <>
            <div className="total">
                <p>Всего доходов</p>
                <h3>{incomesSum} ₽</h3>
            </div>
            <div className="total">
                <p>Всего расходов</p>
                <h3>{expensesSum} ₽</h3>
            </div>
            <div className="total">
                <p>Остаток</p>
                <h3>{incomesSum - expensesSum} ₽</h3>
            </div>
        </>
    )
}

export default Total;