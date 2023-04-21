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
            if (data) {
                // console.log(data);
                setgames(data);
                randomGame();
            }
        }
        fetchgames();
        console.log(game);

    }, [setgames])

    const randomGame = () => {
        let gam = games[Math.floor(Math.random() * games.length)];
        console.log(gam);
        return gam;
    }


    return (
        <div>Salepage
            {/* <Timer /> */}
            {/* <h1>{game.name}</h1> */}
        </div>
    )
}

export default Salepage