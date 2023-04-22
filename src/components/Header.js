import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import carticon from "../img/colorful-shopping-cart-icon-png(1).png"
import cartContext from '../context/CartContext'


const Header = () => {
  const auth = localStorage.getItem('user');
  const [isActive, setActive] = useState(false)
  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartc = useContext(cartContext);
  const navigate = useNavigate();
  let count = 0;


  useEffect(() => {
    cartc.update();
  }, [])

  const adminopen = () => {
    count++;
    if (count > 10) {
      navigate("/admin");
    }
  }
  var pageScrollpos = window.scrollY;
  window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if(pageScrollpos < currentScrollPos) {
      if(isActive){
      setActive(!isActive);
    }
    }
  }


  const signout = () => {
    localStorage.clear();
    navigate('/login');
  }
  const toggleClass = () => {
    setActive(!isActive);
  }

  return (
    <div>
      <nav className={isActive ? "active" : null}>
        <>
          <li onClick={adminopen} className='logo'>
            <i className="fa fa-gamepad"></i>
            <h5>Game<span>Shop</span></h5></li>
        </>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/productlist">GameGallery</NavLink></li>
          <li><NavLink to="/userorders">My Games</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        <div onClick={toggleClass} className="menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className='logo'>
          <div className="cart"><Link to={"/cart"}>
            <img src={carticon} style={{ width: "30px" }} alt="" />
            {cart ? <span className='cart-item'>{cartc.cart.length}</span> : ""}</Link>
          </div>
          {
            auth ? <div className='logger'>
              <h5>{auth}</h5>
              <button onClick={signout}>Sign out</button> </div> :
              <button><Link to={"/login"}>Log In</Link></button>
          }
        </div>
      </nav>
    </div>
  )
}

export default Header
