import React, { useEffect, useState } from 'react'
import './productlist.css'
import { Link } from 'react-router-dom'
import supabase from '../../config/supabaseclient'


const ProductList = () => {

  const [games, setgames] = useState([]);

  useEffect(() => {
    const fetchgames = async () => {
      const { data, error } = await supabase
        .from("games")
        .select()

      if (error) {
        console.log(error)
      }
      if (data) {
        console.log(data);
        setgames(data);
      }
    }
    fetchgames();
  }, [])
  return (
    <div className='game-list'>
      {/* {
        gamelist.map((e) => {
          return (<div className='card'><Link to={"/productpage/" + e.id}>
            <h1>{e.name}</h1>
            <img src={e.img} alt="" />
            <p>{e.desc}</p>
          </Link>
          </div>)
        })
      } */}
      {
        games.map((e) => {
          return (<div className='card'><Link to={"/productpage/" + e.id}>
            <h1>{e.name}</h1>
            <img src={e.imgurl} alt='' />
            <p>{e.desc}</p>
          </Link>
          </div>)
        })
      }
      {(games.length < 1) && "fd"}
    </div>
  )
}

export default ProductList
