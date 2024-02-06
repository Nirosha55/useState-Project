import React, {useState} from "react";

function Time() {
    const now = new Date().toLocaleDateString();
const  [time, setTime] = useState(now);

return(
    <div>
    <h1> {time}</h1>
    <button></button>
    </div>
    )
}
export default Time;
