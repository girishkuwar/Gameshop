import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
    <div className='loginform'>
      <h5>Email Id</h5>
      <input type="text" placeholder='Enter Email' />
      <h5>Password</h5>
      <input type="password" placeholder='Enter Password' />
      <button>Log In</button>
    </div>
    </div>
  )
}

export default Login
