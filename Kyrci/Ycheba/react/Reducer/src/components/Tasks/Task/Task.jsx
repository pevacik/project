import styles from './Task.module.css';

function Task({id, name}) {
    return(
        <div className={styles.task}>
            <h3>{name}</h3>
            <div className={styles.task_buttons}>
                <button>Удалить</button>
                <button>Изменить</button>
            </div>
        </div>
    )
}

export default Task