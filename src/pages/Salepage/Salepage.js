import React, { useEffect, useState } from 'react'
import "./salepage.css"
import Timer from './Timer'
import supabase from '../../config/supabaseclient';
import { Link } from 'react-router-dom';



const Salepage = () => {
    const [game, setGame] = useState([]);

    useEffect(() => {
        const getGame = async () => {
            const { data, error } = await supabase
                .from("games")
                .select()
                .eq('id', 68)
                .single()

            if (data) {
                console.log(data);
                setGame(data);
            } else {
                console.log(error);
            }
        }
        getGame();
    }, [])


    return (
        <div className='salepage'>
            <div className="col">
                    <div className="row">
                {/* <Link to={"/productpage/" + game.id}> */}
                        <h1>10% Off</h1>
                        <h5>Buy Now</h5>
                        <img src={game.imgurl} alt="" />
                        <h2>Rs. <s> {game.price}  </s>  {game.price - (game.price * 10 / 100)}</h2>
                {/* </Link> */}
                    </div>
                <div className="row">
                    <Timer />
                </div>
            </div>
        </div>
    )
}

export default Salepage