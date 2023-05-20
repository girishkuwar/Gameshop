import React, { useState } from 'react'
import "./admin.css"
import { Link, Outlet, NavLink, useNavigate } from 'react-router-dom'
import supabase from '../../config/supabaseclient';

const Admin = () => {
  const [user, setUser] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let count = 0;
  const goHome = () => {
    count++;
    if (count > 10) {
      navigate("/");
    }
  }
  const login = async () => {
    const { data, error } = await supabase
      .from("admin")
      .select()
      .eq('email', email).eq('password', password)
      .single()

    if (data) {
      console.log("done")
      setUser(1);
    } else {
      console.log(error);
      alert("Plzz Enter Admin Details")
    }
    if (data.email === email) {
      localStorage.setItem("Admin", data.username);
    }
  }

  const cheackAdmin = () => {
    const auth = localStorage.getItem('Admin');
    if (auth)  {
      setUser(1);
    } else {
      alert("Unknown Device");
    }


  }
  return (
    <div className='heading'>
      {(user === 1) ? <>  <h1 onClick={goHome} >Game<span><Link to={"/admin"} >Shop</Link> </span></h1>
        <ul>
          <li><a href="/"><NavLink to={"addgame"}>Add Game</NavLink></a></li>
          <li><a href="/"><NavLink to={"gamelist"}>Gamelist</NavLink></a></li>
          <li><a href="/"><NavLink to={"orders"}>Orders</NavLink></a></li>
          <li><a href="/"><NavLink to={"users"}>Customers</NavLink></a></li>
          <li><a href="/"><NavLink to={"bills"}>Bills</NavLink></a></li>
          <li><a href="/"><NavLink to={"contacted"}>Contacted</NavLink></a></li>
          {/* <li><a href="/"><NavLink to={"/"}>Home</NavLink></a></li> */}
        </ul>
        <Outlet />

      </> : <>

        <div className='login'>
          <div className='loginform'>
            <h1>Admin</h1>
            <h5>Email Id</h5>
            <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <h5>Password</h5>
            <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={login}>Log In</button>
            <button onClick={cheackAdmin}>Allready Logged</button>
          </div>
        </div>



      </>}
    </div>
  )
}

export default Admin
