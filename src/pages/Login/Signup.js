import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import supabase from '../../config/supabaseclient';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signup = async () => {
        const { data, error } = await supabase
            .from('users')
            .insert([{ name, email, password }])

        if (data) {
            console.log(data);
        } else {
            console.log(error);
        }
        navigate("/login");
    }
    return (
        <div className='login'>
            <div className='loginform'>
                <h5>Name</h5>
                <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} value={name}/>
                <h5>Email Id</h5>
                <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                <h5>Password</h5>
                <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                <button onClick={signup}>Log In</button><span>Allready have account <Link to={"/login"}>Login here</Link></span>
            </div>
        </div>
    )
}

export default Signup