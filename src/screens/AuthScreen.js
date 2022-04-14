import React, {useState} from "react";
import API from "../constants/API";


const AuthScreen = props =>{

    const [user, setUser] = useState({name:"", email:"", password:"", password2:""});
    const [loginMode, setLoginMode] = useState(false);
    
    const handleChange = (e)=>{
        setUser(current=>{return {...current, [e.target.name]:e.target.value}});
    }

    const register = () =>{
        fetch(`${API.API_URL}/register`, 
        {
            method:"POST", 
            headers: {
            'Content-Type': 'application/json',
        }, 
        body:JSON.stringify(user)
        })
        .then(response=>response.json())
        .then(data=>console.log(data));
    }
    const login = () => {
        fetch(`${API.API_URL}/login`, 
        {
            method:"POST", 
            headers: {
            'Content-Type': 'application/json',
        }, 
        body:JSON.stringify(user)
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            if(data.token) {
                console.log("successfully logged in");
                props.login(data.token);
            }
        });
    }

    const toggleLogin = () => {
        setLoginMode(current=>!current);
    }

    return (
        <div className="form-container">
        <div className="form">
        <h1>{loginMode ? "Login" : "Register"}</h1>
            {!loginMode && <input name="name" onChange={handleChange} value={user.name} placeholder="name" autoComplete="false"></input>}
            <input name="email" onChange={handleChange} value={user.email} placeholder="email" type="email" autoComplete="false"></input>
            <input name="password" onChange={handleChange} value={user.password} placeholder="password" type="password" autoComplete="false"></input>
            {!loginMode && <input name="password2" onChange={handleChange} value={user.password2} placeholder="repeat password" type="password" autoComplete="false"></input>}
            <button type="submit" onClick={loginMode ? login : register}>Submit</button>
            { !loginMode ? <p>Already have an account? <a href="#" onClick={toggleLogin}>Log in</a></p> :
            <p>Don't have an account? <a href="#" onClick={toggleLogin}>Register</a></p>}
        </div>
        </div>
    );

}

export default AuthScreen;