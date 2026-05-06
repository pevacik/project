import axios from "axios"
import { useEffect, useState } from "react"

export function Category() {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        axios.get('https://server.blasars.ru/api/categories')
            .then((res) => {
                setcategories(res.data.body);
            })
    }, [])






    return (
        <>
            {categories.map((category) => {
                return (
                    <div key={category.id} >
                        <h3>{category.name}</h3>
                        <button>удалить</button>
                    </div>
                )
            })}
        </>
    )
}