import { useState } from "react";

function Heading() {
    const [heading, setHeading] = useState("Язык програмирования не выбран");


    return (
        <div>
            <h2>{heading}</h2>
            <select name="select"
                // onChange={setHeading(e.target.value)}
            >
                <option value="Go">Go</option>
                <option value="Python">Python</option>


            </select>

        </div>
    )
}

export default Heading;