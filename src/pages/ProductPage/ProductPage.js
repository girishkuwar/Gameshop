import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import "./Productpage.css"
import supabase from '../../config/supabaseclient';


const ProductPage = () => {
    let [game, setgame] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getGame = async () => {
            const { data, error } = await supabase
                .from("games")
                .select()
                .eq('id', id)
                .single()

            if (data) {
                console.log(data);
                setgame(data);
            } else {
                console.log(error);
                navigate("/");
            }
        }
        getGame();
    }, [id, navigate])

    return (
        <div className='game-info'>
            <div className="col">
                <div className="row">
                    <img src={game.imgurl} alt="" />
                </div>
                <div className="row">
                    <h1>{game.name}</h1>
                    <p><b>RS. {game.price}</b></p>
                    <p>{game.desc}</p>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
