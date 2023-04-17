import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabaseclient';

const GameList = () => {
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
    <div className='list'>
      {
        games.map((g) => {
          return (<div className='item'>
            <img src={g.imgurl} alt="" />
            <h5>{g.name}</h5>
            <h5>{g.price}</h5>
            <h5>{g.desc}</h5>
            <button>Update</button>
            <button>Delete</button>
          </div>)
        })
      }
    </div>
  )
}

export default GameList
