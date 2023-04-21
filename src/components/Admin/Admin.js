import React from 'react'
import "./admin.css"
import { Link, Outlet, NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='heading'>
      <h1>Game<span>Shop</span></h1>
      <ul>
        <li><a href="/"><NavLink to={"addgame"}>Add Game</NavLink></a></li>
        <li><a href="/"><NavLink to={"gamelist"}>Gamelist</NavLink></a></li>
        <li><a href="/"><NavLink to={"orders"}>Orders</NavLink></a></li>
        <li><a href="/"><NavLink to={"users"}>users</NavLink></a></li>
        <li><a href="/"><NavLink to={"/"}>Home</NavLink></a></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Admin
