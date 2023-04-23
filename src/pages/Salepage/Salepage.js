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
                    <h1>10% Off</h1>
                    <h5>Limited Time</h5>
                </div>
                <div className="row">
                    <Timer />
                </div>
            </div>
        </div>
    )
}

export default Salepage