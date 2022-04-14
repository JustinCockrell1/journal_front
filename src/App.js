import React, {useState} from "react";
import AuthScreen from "./screens/AuthScreen";
import "./App.css"
import Header from "./components/Header";
import Dashboard from "./screens/Dashboard";

function App() {

  const [token, setToken] = useState("");

  const isLoggedIn = token=="" ? false : true;

  return (
    <div className="App">
      <Header/>
      {!isLoggedIn && <AuthScreen login={setToken}/>}
      {isLoggedIn && <Dashboard token={token}/>}
    </div>
  );
}

export default App;
