import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabaseclient'
import { Link, useLocation } from 'react-router-dom';
import "./category.css"

const Category = () => {
    const { state } = useLocation();
    const { id, img ,title } = state;
    const [games, setGames] = useState([]);

    useEffect(() => {
        const getCateGames = async () => {
            const { data, error } = await supabase
                .from('category')
                .select('*,games(*)')
                .eq('id', id)

            if (data) {
                setGames(data[0].games);
                console.log(games);
            } else {
                console.log(error);
            }
        }
        window.scrollTo(0,0);
        getCateGames();

    }, [])

    return (
        <div>
            <div className="banner">
                <img src={img} alt="" />
                <h1>{title}</h1>
            </div>
            <div className="cat-list">
                {
                    games.map((e, i) => {
                        return (<div className='card' key={i}><Link to={"/productpage/" + e.id}>
                            <h1>{e.name}</h1>
                            <img src={e.imgurl} alt='' />
                            <p>{e.desc}</p>
                        </Link>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Category