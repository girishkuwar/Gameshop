import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import carticon from "../img/colorful-shopping-cart-icon-png(1).png"
import cartContext from '../context/CartContext'
import supabase from '../config/supabaseclient';
import "./header.css"



const Header = () => {
  const auth = localStorage.getItem('user');
  const [searchtxt, setSearchtxt] = useState("");
  const [list, setList] = useState([]);
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
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (pageScrollpos < currentScrollPos) {
      if (isActive) {
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


  const search = async (txt) => {
    if (txt !== "") {
      const { data, error } = await supabase
        .from('games')
        .select()
        .ilike('name', `%${txt}%`)

      if (data) {
        // console.log(data);
      }
    }
  }
  return (
    <div>
      <nav className={isActive ? "active" : null}>
        <i>
          <li onClick={adminopen} className='logo'>
            <i className="fa fa-gamepad"></i>
            <h5>Game<span>Shop</span></h5></li>
        </i>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/productlist">GameGallery</NavLink></li>
          <li><NavLink to="/userorders">MyGames</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          {/* <li><form action="" class="search-bar">
            <input type="search" name="search" pattern=".*\S.*" required  onChange={(e) => { search(e.target.value) }}/>
              <button class="search-btn" type="submit">
                <span>Search</span>
              </button>
          </form></li> */}
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
