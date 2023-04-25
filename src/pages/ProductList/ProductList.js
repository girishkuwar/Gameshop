import React, { useEffect, useState } from 'react'
import './productlist.css'
import { Link } from 'react-router-dom'
import supabase from '../../config/supabaseclient'
import Loader from '../../components/Loader'


const ProductList = () => {
  let totalcount;
  const [games, setgames] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const recordsperpage = 8;
  const lastindex = currentpage * recordsperpage;
  const firstindex = lastindex - recordsperpage;
  const records = games;
  const npage = Math.ceil(totalcount / recordsperpage);
  // const numbers = [...Array(npage + 1).keys()].slice(1)

  useEffect(() => {

    const getCount = async () => {
    const { error, data, count } = await supabase
    .from('games')
    .select('*', { count: 'exact' })
    totalcount = count;
  }

    const fetchgames = async () => {
      const { data, error } = await supabase
        .from("games")
        .select()
        // .range(firstindex,lastindex)

      if (error) {
        console.log(error)
      }
      if (data) {
        console.log(data);
        setgames(data);
      }
    }
    getCount();
    fetchgames();
  }, [])
  return (<>
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
      {/* <h1>Total Games {totalcount}</h1> */}
    </>
  )
}

export default ProductList
