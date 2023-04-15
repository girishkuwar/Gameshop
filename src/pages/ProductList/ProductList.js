import React from 'react'
import gamelist from '../../data/GamesList'
import './productlist.css'
import { Link } from 'react-router-dom'


const ProductList = () => {
  return (
    <div className='game-list'>
      {
        gamelist.map((e)=> {
            return(<div className='card'><Link to={"/productpage/"+e.id}>
            <h1>{e.name}</h1>
            <img src={e.img} alt="" />
            <p>{e.desc}</p>
            </Link>
            </div>)
        })
      }
    </div>
  )
}

export default ProductList
