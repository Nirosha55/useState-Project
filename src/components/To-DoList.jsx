import React from 'react';
import todoItem from '../components/todoItem';

function ToDoApp() {

const  [inputText, setInputText] = React.useState("");
const  [items, setItems] = React.useState([]);



function handleChange(event) {
const newValue = event.target.value;
setInputText(newValue);

}


function addItem(){
setItems((prevValue) => {
    return[...prevValue,inputText ];
});
}

    return(
        <div className='container'>
          <div className='heading'>
          <h1>To-Do List</h1>
          </div>
          <div className='form'>
            <input onChange={handleChange} type='text' value={inputText}/>
            <button onClick={addItem}>Add Task</button>
          </div>
          <ul>
          {items.map(todoItem =>(<todoItem text= {todoItem}/>))}
          </ul>
        </div>
    );
}
       export default ToDoApp;