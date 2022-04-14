import React, {useState} from "react";

const Task = props => {

    let color="grey";
    
    if(props.task.status==="completed") color="green";
    else if(props.task.status==="incomplete") color="yellow";
    else if(props.task.status==="failed") color="red"; 
    console.log(props.task.status);
    console.log(color);

    return (
        <div className="task" style={{backgroundColor:color, width:200, height:100}}>
        <h2>{props.task.name}</h2>
        <button onClick={()=>props.start(props.task.name)}>Start</button>
        <button>Stop</button>
        <span className="time">00:00:00</span>
        </div>
    );
}

export default Task;