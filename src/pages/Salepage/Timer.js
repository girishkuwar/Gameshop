import React, { useEffect, useRef } from 'react'
import "./salepage.css"
import { useState } from 'react'


const Timer = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, seMinutes] = useState('00');
  const [timersecond, setSecond] = useState('00');

  let interval = useRef();

  useEffect(() => {
    startTimer();
  
    return () => {
      clearInterval(interval.current);
    }
  }, [])
  

  const startTimer = () => {
    const countDownDate =  new Date('June 30, 2025 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if ( distance < 0) {
          clearInterval(interval.current);
        } else {
          setDays(days);
          seMinutes(minutes);
          setHours(hours);
          setSecond(seconds);
      }

     } , 1000);
  }

  return (
    <section className='timer'>
      <div className="">Limited Time</div>
      <div className="">
        <section>
          <p>{days}</p>
          <p><small>Days</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{hours}</p>
          <p><small>Hours</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{minutes}</p>
          <p><small>minutes</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timersecond}</p>
          <p><small>Second</small></p>
        </section>
      </div>
    </section>
  )
}

export default Timer
