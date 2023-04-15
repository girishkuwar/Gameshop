import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import gamelist from '../../data/GamesList';
import "./Productpage.css"


const ProductPage = () => {
    let [game , setgame ] = useState([]);
    const params = useParams();
    const getGame = async () => {
        setgame(gamelist[params.id - 1]);
    }
    useEffect(()=> {
        getGame();
    },[])

    return (
        <div className='game-info'>
            <div className="col">
                <div className="row">
                    <img src={game.img} alt="" />
                </div>
                <div className="row">
                    <h1>{game.name}</h1>
                    <p>{game.desc}</p>
                    <button>BUY</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
