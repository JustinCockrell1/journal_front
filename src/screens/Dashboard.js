import React, {useState} from "react";
import Task from "../components/Task";
import API from "../constants/API";

const Dashboard = props => {

    const [day, setDay] = useState({tasks:[{name:"Math", status:"neutral"}]});

    const startTask = (name) =>{
        const timestamp = Date.now();

        fetch(`${API.API_URL}/task`, 
        {
            method:"POST", 
            headers: {
            'Content-Type': 'application/json',
            'Authorization':`JWT ${props.token}`
        }, 
        body:JSON.stringify({name:name, timestamp:timestamp})
        })
        .then(response=>response.json())
        .then(data=>console.log(data));
    }

    return (
        <div className="dashboard-container">
        <div className="tasks-container">
            <input placeholder="task name"></input>
            <button>Add Task</button>
            {day.tasks.map((task,index)=>{
                return <Task key={index} task={task} start={startTask}></Task>
            })}
        </div>
        </div>
    );
}

export default Dashboard;