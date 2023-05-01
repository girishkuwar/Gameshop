import React, { useEffect, useState } from 'react'
import './productlist.css'
import { Link } from 'react-router-dom'
import supabase from '../../config/supabaseclient'
import Loader from '../../components/Loader'
import Pagination from './Pagination'
import Notification from '../../components/Notification'


const ProductList = () => {
  const [games, setgames] = useState([]);
  const [query, setQuery] = useState("45");
  const [category, setcategory] = useState("");
  const [currentpage, setCurrentpage] = useState(1);
  const [recordsperpage, setrecordperpage] = useState(6);
  const [msg, setMsg] = useState('');


  const fetchgames = async () => {
    const { data, error } = await supabase
      .from("games")
      .select()

    if (error) {
      console.log(error)
      setMsg("Error")
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

  const getCategoryvisegame = async (category) => {

    if (category.length < 1) {
      window.location.reload();
    }
    const { data, error } = await supabase
      .from('games')
      .select()
      .eq('category', category)

    if (data) {
      setgames(data);
    }
    setCurrentpage(1);
  }


  useEffect(() => {
    getCount();
    fetchgames();
  }, [])


  const indexOflastgame = currentpage * recordsperpage;
  const indexOfFirstgame = indexOflastgame - recordsperpage;
  const currentGames = games.slice(indexOfFirstgame, indexOflastgame);


  return (<>
      <Notification msg={msg}/>
    <div className="search-bar">
          <input type="text" placeholder='search game' onChange={(e) => setQuery(e.target.value)} />
      <ul className='list'>
        {query.length > 0 &&
          games.filter((g) => g.name.toLowerCase().includes(query) || g.name.toUpperCase().includes(query) || g.name.includes(query) ).map((e, i) => {
            return (<Link to={"/productpage/" + e.id} className='list-item'> <li>{e.name}</li></Link>)
          })
        }
      </ul>
    </div>
    <div className="category-bar">
      <select name="category" id="" onChange={(e) => getCategoryvisegame(e.target.value)}>
        <option value="">all</option>
        <option value="action">action</option>
        <option value="adventure">adventure</option>
        <option value="racing">racing</option>
        <option value="survival">survival</option>
      </select>
    </div>
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
