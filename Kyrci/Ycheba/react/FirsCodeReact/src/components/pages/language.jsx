import { Link } from "react-router"
import Database from "../../db"


function Language() {
    const sortedBase = [...Database].sort((a, b) => a.id > b.id)
    console.log(sortedBase)
    return (
        <div className="container indent" >
            <div className=" language" >
                {sortedBase.map(id => (
                    <Link to={`/language/${id.id}`} key={id.id}>
                        <img src={id.image} width="50px" />
                        <h3>{id.name}</h3>
                        <p>{id.description}</p>
                    </Link>))}
            </div>
        </div>
    )
}

export default Language
