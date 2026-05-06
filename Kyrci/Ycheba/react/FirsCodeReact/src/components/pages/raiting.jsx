import { Link } from "react-router"
import Database from "../../db"


function Raiting() {
    const sortedBase = [...Database].sort((a, b) => a.place > b.place);

    return (

        <div className="container indent">
            <div>
                <table border="1" >
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Логотип</th>
                            <th>Название</th>
                            <th>Ссылка</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedBase.map(item => (
                            <tr key={item.id} >
                                <td>{item.place}</td>
                                <td><img src={item.image} width="50px" /></td>
                                <td>{item.name}</td>
                                <td><Link to={`/raiting/${item.id}`}>Подробнее</Link></td>
                            </tr>))}

                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default Raiting


{/* <tr>
                            <td>1</td>
                            <td><img src="https://first-code.ru/api/uploads/hometasks/react/0c62a8ea-db60-4a64-a267-9faa0a39f684/bf5a8885-48b6-43a1-b274-aa4abdee3475/demo/images/python.svg" width="50px" alt="" /></td>
                            <td>Python</td>
                            <td><Link to="/language">Подробнее</Link></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><img src="https://first-code.ru/api/uploads/hometasks/react/0c62a8ea-db60-4a64-a267-9faa0a39f684/bf5a8885-48b6-43a1-b274-aa4abdee3475/demo/images/javascript.svg" alt="" width="50px" /></td>
                            <td>JavaScript</td>
                            <td><Link to="/language">Подробнее</Link></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><img src="https://first-code.ru/api/uploads/hometasks/react/0c62a8ea-db60-4a64-a267-9faa0a39f684/bf5a8885-48b6-43a1-b274-aa4abdee3475/demo/images/java.svg" alt="" width="50px" /></td>
                            <td>Java</td>
                            <td><Link to="/language">Подробнее</Link></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><img src="https://first-code.ru/api/uploads/hometasks/react/0c62a8ea-db60-4a64-a267-9faa0a39f684/bf5a8885-48b6-43a1-b274-aa4abdee3475/demo/images/typescript.svg" alt="" width="50px" /></td>
                            <td>TypeScript</td>
                            <td><Link to="/language">Подробнее</Link></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><img src="https://first-code.ru/api/uploads/hometasks/react/0c62a8ea-db60-4a64-a267-9faa0a39f684/bf5a8885-48b6-43a1-b274-aa4abdee3475/demo/images/nodejs.svg" alt="" width="50px" /></td>
                            <td>Node.js</td>
                            <td><Link to="/language">Подробнее</Link></td>
                        </tr> */}