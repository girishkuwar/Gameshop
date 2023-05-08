import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import supabase from '../../config/supabaseclient';
import Loader from '../../components/Loader';
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  })

  const login = async () => {
    setLoader(true);
    const { data, error } = await supabase
      .from("users")
      .select('*,cart(*)')
      .eq('email', email).eq('password', password)
      .single()

    if (data) {
      console.log(data)
      setLoader(false);
    } else {
      console.log(error);
    }
    if (data.email === email) {
      localStorage.setItem("user", data.name);
      localStorage.setItem("userid", data.id);
      localStorage.setItem("cart_id", data.cart[0].id);
      navigate("/");
    }
  }

  const reallogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if(data){
      console.log(data);
      login();
    } else {
      console.log(error);
    }
  }

  return (
    <div className='login'>
      <div className='loginform'>
        <h5>Email Id</h5>
        <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
        <h5>Password</h5>
        <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
        <button onClick={reallogin}>Log In</button><span>New user <Link to={"/signup"}>Signup</Link></span>
      </div>
      {(loader) && <div className="loader-m"><Loader /></div>}
    </div>
  )
}

export default Login
