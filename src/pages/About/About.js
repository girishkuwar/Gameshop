import React from 'react'
import Loader from '../../components/Loader'
import "./about.css"

const About = () => {
  return (
    <div className='about'>
      <Loader />
      <i> <ul><li className='logo'>
        <i className="fa fa-gamepad"></i>
        <h5>Game<span>Shop</span></h5>
      </li></ul> </i>
    </div>
  )
}

export default About
