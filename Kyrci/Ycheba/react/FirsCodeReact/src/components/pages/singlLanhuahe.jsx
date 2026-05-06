import dataBase from "../../db"
import { Navigate, useNavigate, useParams } from "react-router"

export function SinglLang() {
    const navigate = useNavigate();
    const { id } = useParams();
    const item = dataBase.find(x => String(x.id) === String(id)); // переводит строку в число

    return (

        <>
            <button onClick={() => navigate(-1)} >Назад</button>
            <p>Место в рейтинге: {item.place}</p>
            <h3>{item.name}</h3>
            <img src={item.image} width="100px" />
            <p>{item.description}</p>
        </>
    )

}


