import React from 'react'
import gamelist from '../../data/GamesList'

const GameList = () => {
  return (
    <div className='list'>
      {
        gamelist.map((g) => {
          return (<div className='item'>
            <img src={g.img} alt="" />
            <h5>{g.name}</h5>
            <button>Update</button>
            <button>Delete</button>
            </div>)
        })
      }
    </div>
  )
}

export default GameList
