import { useState } from "react";
import { v4 as uuid } from "uuid";

const dohodi = [{ id: 1, name: "пиво", num: 24 }]
let rashodi = [{ id: 2, num: 24 }]


function MoneyApp() {

    // Доходы //
    const [nameAddMoney, setNameAddMoney] = useState('')
    const [numberAddmoney, setNumbeAddmoney] = useState('')
    const [moneyPlusList, setMoneyplusList] = useState(dohodi)
    function sumMoney() {
        setMoneyplusList([...moneyPlusList, { id: uuid(), name: nameAddMoney, num: numberAddmoney }])
        setNameAddMoney('')
        setNumbeAddmoney('')
    }


    // Расходы  
    const [nameMinusmoney, setNameMinusmoney] = useState('')
    const [numberMinusMoney, setNumberMinusMoney] = useState("")
    const [MoneyMinusList, setMoneyminuslist] = useState(rashodi)
    function sumMinus() {
        setMoneyminuslist([...MoneyMinusList, { id: uuid(), name: nameMinusmoney, num: numberMinusMoney }])
    }



    function deliteCategory(id, list, setList) {
        let arr = list.filter((item) => {
            if (item.id != id) {
                return item
            }
        })
        setList(arr)
    }


    return (
        <div className="row indent" >
            <div className="container " >
                <input type="text" placeholder="Откуда пришло" onChange={e => setNameAddMoney(e.target.value)} />
                <input type="number" placeholder="Солько пришло" onChange={e => setNumbeAddmoney(e.target.value)} />
                <button className="button" onClick={sumMoney} >Добавить</button>

                <div className="container ">
                    <h3>Доходы</h3>
                    {moneyPlusList.map((item) => {
                        return (
                            <div className="container" >
                                <h4 key={item.id}>{item.name}</h4>
                                <p>{item.num}</p>
                                <button onClick={() => { deliteCategory(item.id, moneyPlusList, setMoneyplusList) }} >Удалить</button>
                            </div>)
                    })}

                </div>
            </div>


            <div className="container" >
                <input type="text" placeholder="На что потратил" onChange={(e) => setNameMinusmoney(e.target.value)} />
                <input type="number" placeholder="Солько потратил" onChange={(e) => setNumberMinusMoney(e.target.value)} />
                <button className="button" onClick={sumMinus} >Добавить</button>
                <div className="container ">
                    <h3>Расходы</h3>
                    {MoneyMinusList.map((item) => {
                        return (
                            <div className="container" >
                                <h4 key={item.id}>{item.name}</h4>
                                <p>{item.num}</p>
                                <button onClick={() => { deliteCategory(item.id, MoneyMinusList, setMoneyminuslist) }}>Удалить</button>
                            </div>)
                    })}
                </div>
            </div>



        </div>
    )

}
export default MoneyApp;