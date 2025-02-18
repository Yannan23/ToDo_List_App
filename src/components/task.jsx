import React from 'react'

function Task({ task, onComplete }) {
    if (!task) return

    return (
        <li key={task.id} className={task.complete ? "completed" : ""}>
            {task.content}
            <button onClick={onComplete}>{task.complete ? 'Undo' : 'Completed'}</button>
        </li>
    )
}
export default Task;

