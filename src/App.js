import { useState } from 'react'
import './App.css'
import Task from './components/task.jsx'

const App = () => {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleClick = () => {
        if (inputValue.trim() === '') return;

        setTasks(prevtasks => [
            ...prevtasks,
            { id: Date.now(), content: inputValue, complete: false }
        ]
        )
        setInputValue('');
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleComplete = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, complete: !task.complete } : task
            ));
    };

    return (
        <div>
            <input type='text' value={inputValue} onChange={handleChange}></input>
            <button onClick={handleClick}>Add</button>
            <ul>
                {
                    tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            onComplete={() => handleComplete(task.id)}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default App