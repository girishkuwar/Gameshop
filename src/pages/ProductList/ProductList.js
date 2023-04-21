import React, { useEffect, useState } from 'react'
import './productlist.css'
import { Link } from 'react-router-dom'
import supabase from '../../config/supabaseclient'
import Loader from '../../components/Loader'


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
      {
        games.map((e,i) => {
          return (<div className='card' key={i}><Link to={"/productpage/" + e.id}>
            <h1>{e.name}</h1>
            <img src={e.imgurl} alt='' />
            <p>{e.desc}</p>
          </Link>
          </div>)
        })
      }
      {(games.length < 1) && <Loader/>}
    </div>
  )
}

export default ProductList
