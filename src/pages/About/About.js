import React from 'react'
import Loader from '../../components/Loader'
import "./about.css"

const About = () => {
  return (
    <div className='about'>
      <Loader/>
      <div className="myinfo">
      <h1>GIRISH<span>KUWAR</span></h1>
      <h2><span>Class : </span>M.sc.(Comp.sci.)</h2>
      <h3><span>College : </span> Bhonsla Millitry College Nashik</h3>
      <h3><span>Email id : </span>girishkuwar11@gmail.com</h3>
      </div>
    </div>
  )
}

export default About
