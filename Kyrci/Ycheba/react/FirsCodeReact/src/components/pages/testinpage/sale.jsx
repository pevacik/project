import { useState } from "react"

function Sale() {
    const [sale, setSale] = useState("Введите ваш текст")

    return (
        <>
            <input type="text"
                placeholder={useState}
                {...(value == "sale" ? {
                    style: { border: "1px solid #dcdcdc" }
                } : {})
                }

                onChange={(e) => { setSale(e.target.value) }}
                value={sale} />
        </>

    )
}


export default Sale;