import { useState } from "react";
function Chekinng() {
    const [language, setLanguage] = useState('')
    const [heading, setHeading] = useState('Язык програмирования не выбран')
    const handlChange = (e) => {

        setLanguage(e.target.value)

        if (e.target.value) {
            setHeading(`Выбран язык програмирования: ${e.target.value}`)
        } else {
            setHeading('Язык программирования не выбран')
        }
    }

    return (
        <form>
            <h2>{heading}</h2>
            <select value={language} onChange={handlChange}>
                <option value="">Выбрать язык програмирования</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="Go">Go</option>
                <option value="Ruby">Ruby</option>
                <option value="Swift">Swift</option>
                <option value="Kotlin">Kotlin</option>
                <option value="SQL">SQL</option>
            </select>
        </form>

    )

}

export default Chekinng