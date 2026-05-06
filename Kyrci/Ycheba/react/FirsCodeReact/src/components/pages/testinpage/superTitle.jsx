import { useState } from "react"
function NewText() {
    const [text, setText] = useState('')

    return (

        <div>
            <input
                type="text"
                placeholder="Введите что хочется ввести"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button>{text}</button>

        </div>

    )
}
export default NewText