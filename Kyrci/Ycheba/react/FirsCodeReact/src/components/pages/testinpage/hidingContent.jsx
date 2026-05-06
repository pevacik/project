import { сhildren, useState } from "react"

export function Hidcontent({ children }) {


    const [hide, setHide] = useState('')

    return (
        <>
            <button onClick={() => setHide(!hide)}>
                {hide ? "Скрыть" : "Показать"}
            </button>

             

        </>
    )
}