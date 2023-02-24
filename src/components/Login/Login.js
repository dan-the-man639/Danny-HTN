import React, { useState } from 'react';
import LoginForm from './LoginForm';
//import './Login.css';

function Login({ onSetLoginState }) {
    //login info
    const adminUser = {
        email: "admin@gmail.com",
        password: 'HTN'
    }

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    //Login
    const Login = details => {
        console.log(details);
        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log("logged in");
            setUser({
                name: details.name,
                email: details.email,
            });
            onSetLoginState(true);
        } else{
            console.log("Details do not match!");
            setError("Details do not match!");
            onSetLoginState(false);
        }
    }

    //LogOut
    const Logout = () => {
        setUser({name: "", email: ""});
    }

//className = login = App
    return(
        <div className='login'>
            {(user.email !== "") ? (
                <div className='welcome'>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
    );

}

export default Login;