import React, { useState } from 'react';
import './Login.css';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? (<div className='error'>{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className='input' type='text' name='name' id='name' placeholder='any' onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input className='input' type='email' name='email' id='email' placeholder='admin@gmail.com' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input className='input' type='password' name='password' id='password' placeholder='HTN'onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input className='' type='submit' value='LOGIN' />
            </div>
        </form>
    );
}

export default LoginForm;