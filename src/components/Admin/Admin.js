import React from 'react'
import "./admin.css"
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='heading'>
      <h1>Game<span>Shop</span></h1>
      <ul>
        <li><a href=""><Link to={"addgame"}>Add Game</Link></a></li>
        <li><a href=""><Link to={"gamelist"}>Gamelist</Link></a></li>
        <li><a href=""><Link to={"orders"}>Orders</Link></a></li>
        <li><a href=""><Link to={"users"}>users</Link></a></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Admin
