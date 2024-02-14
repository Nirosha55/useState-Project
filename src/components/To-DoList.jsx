import React from 'react';

function ToDoApp() {
    return(
        <div className='container'>
          <div className='heading'>
          <h1>To-Do List</h1>
          </div>
          <div className='form'>
            <input type='text'/>
            <button>Add Task</button>
          </div>
          <ul>
            <li>A item</li>
          </ul>
        </div>
    );
}


export default ToDoApp;