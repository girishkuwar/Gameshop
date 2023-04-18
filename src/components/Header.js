import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import carticon from "../img/colorful-shopping-cart-icon-png(1).png"
const Header = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const signout = () => {
    localStorage.clear();
    navigate('/login');
  }


  return (
    <div>
      <nav>
        <ul>
          <li className='logo'>
            <i class="fa fa-gamepad"></i>
            <h5>Game<span>Shop</span></h5></li>
          <li><a><Link to="/">Home</Link></a></li>
          <li><a><Link to="/productlist">Games Gallery</Link></a></li>
          <li><a><Link to="/about">About</Link></a></li>
          <li><a><Link to="/contact">Contact</Link></a></li>
        </ul>
        <div className='logo'>
        <img src={carticon} style={{width:"30px"}} alt="" />
        {
          auth ? <div className='logger'>
          <h5>{auth}</h5>
          <button onClick={signout}>Sign out</button> </div>:
          <button><Link to={"/login"}>Log In</Link></button> 
        }
        </div>
      </nav>
    </div>
  )
}

export default Header
