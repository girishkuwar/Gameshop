import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
            <li><a><Link to="/">Home</Link></a></li>
            <li><a><Link to="/about">About</Link></a></li>
            <li><a><Link to="/contact">Contact</Link></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
