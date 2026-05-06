import { useContext, useState } from "react";
import Category from "./category";
import NewText from "./superTitle";
import MoneyApp from "./moneyApp";
import { PopupHelloContext, PopupHelloProvider } from "../../../context/PopupHelloContext";


function TestingPage() {
    const { notification, setNotification } = useContext(PopupHelloContext)

    const [promo, setPromo] = useState('')
    const inputStyle = promo == 'sale'
        ? { border: '2px solid green' }
        : {};
    const [value, setValue] = useState("")
    const [hide, setHide] = useState('')
    const [number1, setNumer1] = useState()
    const [number2, setNumer2] = useState()
    const [sum, setSum] = useState()
    const [hide2, setHide2] = useState("Скрыть")
    const handlClick = (e) => {
        e.preventDefault();
        setSum(+number1 + +number2);
    }
    const [hide3, setHide3] = useState('')




    const btnHello = () => {
        console.log("Привет " + notification)
    }

    return (
        <div>
            <button onClick={() => setHide(!hide)}>
                {hide ? "Скрыть" : "Показать"}

            </button>


            {hide && <>
                <NewText />
                <Category />


                <div>

                    <MoneyApp />

                    <input type="number"
                        onChange={(e) => {
                            setNumer1(e.target.value)
                            setSum()
                        }}
                        value={number1}
                        placeholder="Введите первое число" />


                    <input type="number"
                        value={number2}
                        onChange={(e) => {
                            setNumer2(e.target.value)
                        }}
                        readOnly={Number(number1) ? false : true}
                        placeholder="Введите второе число" />

                    <button
                        onClick={() => {
                            setNumer1('');
                            setNumer2('');
                            setSum('');
                        }}
                    >Очистить</button>


                    <button
                        onClick={handlClick}
                        disabled={Number(number1) && Number(number2) ? false : true}
                    > Рассчитать</button>
                    <p>{sum}</p>
                </div >


                <button

                    onClick={
                        (e) => {
                            setHide2(hide2 == "Скрыть" ? "Показать" : "Скрыть")
                        }
                    }

                >{hide2}</button>

                {hide2 == "Скрыть" ? <p className="description" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi error libero deleniti incidunt quia expedita iste, numquam nisi quaerat culpa quas eius, distinctio ex fugiat? Doloribus, minima. Incidunt, perferendis?
                </p> : null}



                <div  >
                    <input type="text"

                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                    />
                    <p>Input text:{value}</p>
                </div >

                <div>
                    <button onClick={(e) => {
                        setHide3(!hide3)
                    }
                    }>Show/Hide Text</button>

                    {!hide3 && <p>Toggle me!</p>}

                </div >
                < input type="text"
                    onChange={(e) => setPromo(e.target.value)
                    }
                    value={promo}
                    style={inputStyle} />



            </>}
            <div className="notification">
                <input type="text" onChange={
                    e => setNotification(e.target.value)
                } />
                <button onClick={btnHello} >Отправить</button>
            </div>
        </div>
    )
}

export default TestingPage;