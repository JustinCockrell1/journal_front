import React, {useState} from "react";
import Task from "../components/Task";
import API from "../constants/API";

const Dashboard = props => {

    const [day, setDay] = useState({tasks:[{name:"Math", status:"neutral"}]});
    const [newTask, setNewTask] = useState("");

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

    const addTask = function() {

        setDay(current=>{return {...current, tasks:[...current.tasks, {name:newTask, status:"neutral"}]}});
        console.log(day);
        setNewTask("");
    }

    return (
    
        <div className="dashboard-container">
        <div className="tasks-container">
        <div className="add-task">
            <input placeholder="task name" value={newTask} onChange={(e)=>{setNewTask(e.target.value);}}></input>
            <button onClick={addTask}>Add Task</button>
            </div>
            {day.tasks.map((task,index)=>{
                return <Task key={index} task={task} start={startTask}></Task>
            })}
        </div>
        </div>
    );
}

export default Dashboard;