import React from 'react'
import "./Notfound.css"
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='nopage'>
        <div className="nopage-container">
            <h1>404</h1>
            <h2>Ooops!!</h2>
            <h3>The Page Doesn't exit or available</h3>
            <button><Link to={"/"}>BACK TO HOME</Link></button>
        </div>

        
    
    </div>
  )
}

export default Notfound