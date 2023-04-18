import React, { useEffect, useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import supabase from '../../config/supabaseclient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

   useEffect(()=> {
        const auth = localStorage.getItem('user');
        if (auth)  {
            navigate('/');
        }
    })

  const login = async () => {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq('email', email).eq('password',password)
      .single()

    if (data) {
      console.log("done")
    } else {
      console.log(error);
    }
    if(data.email === email){
      localStorage.setItem("user",data.name);
      navigate("/");
    }
  }


  return (
    <div className='login'>
      <div className='loginform'>
        <h5>Email Id</h5>
        <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
        <h5>Password</h5>
        <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
        <button onClick={login}>Log In</button><span>New user <Link to={"/signup"}>Signup</Link></span>
      </div>
    </div>
  )
}

export default Login
