import React, {useState} from "react";

function Timer() {

    setInterval(updateTime,1000);
    
    const now = new Date().toLocaleDateString();

    const  [time, setTime] = useState(now);

function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
}

return(
    <div>
    <h1> {time}</h1>
    <button onClick={updateTime}> updated Time</button>
    </div>
    )
}
export default Timer;
