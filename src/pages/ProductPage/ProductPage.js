import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import "./Productpage.css"
import supabase from '../../config/supabaseclient';
import cartContext from '../../context/CartContext';
import Loader from '../../components/Loader';
import logo from "../../img/gameshop.png"
import windowlogo from "../../img/windows-platform-logo-svg.svg"
import Notification from '../../components/Notification';


const ProductPage = () => {
    let [game, setgame] = useState([]);
    const [msg, setMsg] = useState("")
    const navigate = useNavigate();
    const { id } = useParams();
    const cartc = useContext(cartContext);
    const [screenshots, setscreenshots] = useState(0);

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
                setscreenshots(data.screenshots);
            } else {
                console.log(error);
                navigate("/");
            }
        }
        getGame();
    }, [id, navigate])

    const addtocart = () => {
        var oldItems = JSON.parse(localStorage.getItem('cart')) || [];
        oldItems.push(game);
        localStorage.setItem('cart', JSON.stringify(oldItems));
        setMsg("Added Item To Cart");
        // alert("Added Item To Cart");
        cartc.update();
    }

    return (
        <div className='game-info'>
            <Notification msg={msg}/>
            {game.length < 1 ? <Loader /> : <>
                <div className="col">
                    <div className="row">
                        <img src={game.imgurl} alt="" />
                    </div>
                    <div className="row">
                        <h1>{game.name}</h1>
                        <p className='price'><b>RS. {game.price}</b></p>
                        <p>{game.desc}</p>
                        <h4>{game.category}</h4>
                        <div className="flexbox">
                        <button onClick={addtocart}>Add To Cart</button>
                        <img className='window-logo' src={windowlogo} alt="" /></div>
                    </div>
                </div>

                <div className="gameplay-s">
                    <h2>GamePlay</h2>
                    <div className="gameplay">
                        <img src={logo} alt="" />
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.id}/0.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.id}/1.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.id}/2.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.id}/3.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.id}/4.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.id}/5.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.name}/0.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.name}/1.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.name}/2.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.name}/3.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.name}/4.jpg`} alt="" /> 
                        <img src={`https://tfnokgublfaoehupzhtc.supabase.co/storage/v1/object/public/gamespics/public/${game.name}/5.jpg`} alt="" /> 
                    </div>
                </div>

                <div className="req">
                    <h2>System Requirment</h2>
                    <div className="req-cont">
                        <div className="col-left">
                            <h3>Minimum :</h3>
                            <p>Requires a 64-bit processor and operating system<br />
                                OS: 64-bit Windows 7, Windows 8.1, Windows 10<br />
                                Processor: Intel Core i5-4430 / AMD FX-6300<br />
                                Memory: 8 GB RAM<br />
                                Graphics: NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB<br />
                                DirectX: Version 11<br />
                                Storage: 90 GB available space</p>
                        </div>
                        <div className="col-right">
                            <h3>RECOMMENDED :</h3>
                            <p>Requires a 64-bit processor and operating system<br />
                                OS: 64-bit Windows 10<br />
                                Processor: AMD Ryzen 5-1600 / Intel Core i5-7600K<br />
                                Memory: 8 GB RAM<br />
                                Graphics: Nvidia GTX 1060 6GB or better<br />
                                DirectX: Version 11<br />
                                Storage: 90 GB available space
                            </p>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default ProductPage
