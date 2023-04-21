import React, { useEffect, useState } from 'react'
import "./salepage.css"

const Timer = (props) => {
    const { initMinute = 60, initSeconds = 30 } = props
    const [minutes, setMinutes] = useState(initMinute)
    const [seconds, setSeconds] = useState(initSeconds)

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
              setSeconds(seconds - 1)
            } if (seconds === 0) {
              if (minutes === 0) {
                clearInterval(myInterval)
              } else {
                setMinutes(minutes - 1)
                setSeconds(59)
              }
            }
          }, 1000)
    }, [minutes,seconds])


    return (
        <React.Fragment>
            <div className='wrapper'>
                    <React.Fragment>
                        <h1>00:15:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    </React.Fragment>
            </div>
        </React.Fragment>
    )
}

export default Timer
