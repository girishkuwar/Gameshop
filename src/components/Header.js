import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
        <button><Link to={"/login"}>Log In</Link></button>
      </nav>
    </div>
  )
}

export default Header
