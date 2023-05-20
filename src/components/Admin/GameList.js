import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabaseclient';
import { Link } from 'react-router-dom';

const GameList = () => {
  const [games, setgames] = useState([]);

  useEffect(() => {
    fetchgames();
  }, [])

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

  const deleteGame = async (id) => {
    if (window.confirm("Are You sure You want to delete product")) {
      const { error } = await supabase
        .from("games")
        .delete()
        .eq('id', id)
      if (error) {
        console.log(error)
      } else {
        alert("Deleted");
        fetchgames();
      }
    } else {

    }
  }

  return (
    <div className='list'>
      {
        games.map((g) => {
          return (<div className='item'>
            <img src={g.imgurl} alt="" />
            <h5>{g.name}</h5>
            <h5>Rs. {g.price}</h5>
            <button><Link to={"updategame/" + g.id}>Update</Link></button>
            <button onClick={() => deleteGame(g.id)}>Delete</button>
          </div>)
        })
      }
    </div>
  )
}

export default GameList
