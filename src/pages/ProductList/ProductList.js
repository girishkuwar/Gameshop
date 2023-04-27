import React, { useEffect, useState } from 'react'
import './productlist.css'
import { Link } from 'react-router-dom'
import supabase from '../../config/supabaseclient'
import Loader from '../../components/Loader'
import Pagination from './Pagination'


const ProductList = () => {
  const [games, setgames] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [recordsperpage, setrecordperpage] = useState(6);


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

  const getCount = async () => {
    const { error, data, count } = await supabase
      .from('games')
      .select('*', { count: 'exact' })
  }


  useEffect(() => {
    getCount();
    fetchgames();
  }, [])


  const indexOflastgame = currentpage * recordsperpage;
  const indexOfFirstgame = indexOflastgame - recordsperpage;
  const currentGames = games.slice(indexOfFirstgame, indexOflastgame);


  return (<>
    <div className='game-list'>
      {
        currentGames.map((e, i) => {
          return (<div className='card' key={i}><Link to={"/productpage/" + e.id}>
            <h1>{e.name}</h1>
            <img src={e.imgurl} alt='' />
            <p>{e.desc}</p>
          </Link>
          </div>)
        })
      }
      {(games.length < 1) && <Loader />}

    </div>
    {
      (games.length > 1) && <div className='paging'>
        <Pagination totalPosts={games.length} postPerpage={recordsperpage} setCurrentPage={setCurrentpage} currentpage={currentpage} />
      </div>
    }

  </>
  )
}

export default ProductList
