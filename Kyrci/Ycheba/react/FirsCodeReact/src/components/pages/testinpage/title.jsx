import { useState } from "react"

function heading() {
    const [ title, setTitle ] = useState('')

    return (

        <div>

            <input
                type="text"
                placeholder="Введите текст"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <h2>{title}</h2>
        </div>

    )
}

export default heading