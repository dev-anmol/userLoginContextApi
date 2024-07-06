//send data into context 


import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername]  = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div className='main-container'>
        <h2>Login</h2>
        <input type="text" placeholder='username'value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <h2>Password</h2>
        <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login