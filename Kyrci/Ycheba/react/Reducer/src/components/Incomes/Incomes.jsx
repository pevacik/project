import Income from "./Income";
import FormAddIncome from "./FormAddIncome";
import { useSelector } from "react-redux";

function Incomes() {

    const incomes = useSelector((state) => {

        return state.incomes.incomelist
    });

    return (
        <div className="incomes">

            <FormAddIncome />

            <h2>Доходы</h2>
            {incomes.length ? (
                incomes.map((income) => (
                    <Income
                        key={income.id}
                        id={income.id}
                        name={income.name}
                        amount={income.amount}
                    />
                ))
            ) : (
                <p className="text_not_data">Нет доходов</p>
            )}
        </div>
    )
}

export default Incomes;