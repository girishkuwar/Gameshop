import React, { useEffect } from 'react'
import "./notification.css"
import { useState } from 'react';

const Notification = ({msg}) => {
  const [message, setMessage] = useState("")
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    if(msg === ''){
      setOpacity(0);
    }else {
    setMessage(msg)
    setOpacity(1);
    setTimeout(() => {
      setOpacity(0);
      setMessage("");
    }, 5000);}
  }, [msg])
  
  return (
    <div className='toast' style={{opacity:opacity}}>
      <div className="toast-content">
        {/* <i className="fas fa-solid fa-check check"></i> */}

        <div className="message">
          <span className='text text-2'>{message}</span>
        </div>

        <i onClick={() =>{ setOpacity(0); }} className="fa-solid fa-xmark"></i>
      </div>
    </div>
  )
}

export default Notification