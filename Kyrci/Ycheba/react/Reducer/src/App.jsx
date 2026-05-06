import Incomes from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";
import Total from "./components/Total";

import FormAddTast from "./components/FormAddTast"
import UpdateTast from "./components/UpdateTast"
import Tasks from "./components/Tasks/Tasks"

function App() {
    return (
        <div className="container">
            <div className="flexrow" >


                <FormAddTast />
                <UpdateTast />
                <Tasks />
            </div>
            <Incomes />
            <Expenses />
            <Total />


        </div>
    )
}

export default App;