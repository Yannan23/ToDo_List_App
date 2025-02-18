import './App.css';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {

    if (inputValue.trim() === '') return;

    setTasks(prevTasks => [
      ...prevTasks,
      { id: Date.now(), text: inputValue, complete: false }
    ])

    setInputValue('')
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleComplete = (id) => {
    //  This is the MOST IMPORTANT CHANGE:  Update the state correctly
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  return (
    <div className="App">
      <input value={inputValue} type='text' onChange={handleChange}></input>
      <button onClick={handleClick}>Add</button>
      <ul>
        {
          tasks.map(task => (
            <li key={task.id} className={task.complete ? 'completed' : 'li'}>
              {task.text}
              <button onClick={() => handleComplete(task.id)}>
                {task.complete ? 'not yet' : 'completed'}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
