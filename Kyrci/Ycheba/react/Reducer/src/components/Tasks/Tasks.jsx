import Task from "./Task/Task"
import { useSelector } from "react-redux";

function Tasks() {

    const tasks = useSelector((state) => {
        return state.tasks.taskList
    })

    return (
        <div className="indent">
            <h2>Задачи</h2>

            {tasks.length ? (
                tasks.map((task) => (
                    <Task key={task.id} {...task} />
                ))
            ) : (
                <p>Задач нет</p>
            )}
        </div>
    )
}

export default Tasks