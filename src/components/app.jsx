import React from "react";


function App() {

const  [count, setCount] = React.useState(0);

function Increment() {
setCount(count+1);
}
function decrement() {
    setCount(count-1);
    }

    return(
        <div>
            <h1> {count}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={decrement}>-</button>
            </div>
    )
}

export default App;