import React, { useEffect, useState } from 'react'
import "./salepage.css"
import Timer from './Timer'
import supabase from '../../config/supabaseclient';



const Salepage = () => {
    const [games, setgames] = useState([]);
    const [game, setGame] = useState([]);

    useEffect(() => {
        const fetchgames = async () => {
            const { data, error } = await supabase
                .from("games")
                .select()

            if (error) {
                console.log(error)
            }
            console.log(data);
            setgames(data);
            // setGame(games[1]);
        }
        fetchgames();
    }, [setgames])

    // console.log(games[1]);


    return (
        <div className='salepage'>
            <div className="col">
                <div className="row">
                    <Timer />
                </div>
                {game && 
                <div className="row">
                    <h1>{game.name}</h1>
                    <img src={game.imgurl} alt="" />
                    <h5>Rs.<s>{game.price}</s></h5>
                    <h4>10 % off</h4>
                    <h5>{game.price - (game.price * (10 / 100)).toFixed(1)}</h5>
                </div>}
            </div>
        </div>
    )
}

export default Salepage