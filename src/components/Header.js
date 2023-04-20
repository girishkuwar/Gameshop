import React, { useContext, useEffect} from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import carticon from "../img/colorful-shopping-cart-icon-png(1).png"
import cartContext from '../context/CartContext'


const Header = () => {
  const auth = localStorage.getItem('user');
  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartc = useContext(cartContext);
  const navigate = useNavigate();

  useEffect(() => {
    cartc.update();
  }, [cartc])
  


  
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
          <li><a href='/'><NavLink  to="/">Home</NavLink></a></li>
          <li><a href='/'><NavLink to="/productlist">GameGallery</NavLink></a></li>
          <li><a href='/'><NavLink  to="/userorders">Orders</NavLink></a></li>
          <li><a href='/'><NavLink to="/contact">Contact</NavLink></a></li>
          <li><a href='/'><NavLink to="/about">About</NavLink></a></li>
        </ul>
        <div className='logo'>
          <div className="cart"><Link to={"/cart"}>
            <img src={carticon} style={{ width: "30px" }} alt="" />
            { cart ?  <span className='cart-item'>{cartc.cart.length}</span>: ""}</Link> 
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
