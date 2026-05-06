import { useState } from "react";

function SuperSale() {
    const [sale, setSale] = useState("")


    return (
        <>
            <input type="text"
                placeholder="Введите ваш очень важный текст"
                {...(
                    value == "sale" ? {
                        style: { border: "1px solid #dcdcdc" }
                    } : {}
                )}
                onChange={e => setSale(e.target.value)}
                value={sale}
            />

        </>

    )
}
export default SuperSale;