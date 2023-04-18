import React, { useContext, useEffect, useState } from 'react'
import "./cart.css"
import { Link, useNavigate } from 'react-router-dom';
import cartContext from '../../context/CartContext';

const Cart = () => {
    let [games, setgames] = useState([]);
    const cartc = useContext(cartContext);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (!auth) {
            navigate('/login');
        }
        setgames(JSON.parse(localStorage.getItem('cart')));
    }, [navigate])
    let total = 0;
    for (let i = 0; i < games.length; i++) {
        total += games[i].price;
    }

    const removeitem = (v) => {
        console.log(v);
        let obj = games.find(o => o.id === v.id);
        console.log(obj);
        games.splice(games.findIndex(a => a.id === v.id), 1)
        setgames(games);
        localStorage.setItem('cart', JSON.stringify(games));
        setgames(JSON.parse(localStorage.getItem('cart')));
        cartc.update();
    }
    return (
        <div>
            {
                games.map((v) => {
                    return (<>
                        <h1>{v.name}</h1>
                        <p>{v.price}</p>
                        <img src={v.imgurl} alt="" style={{ width: "200px" }} />
                        <button onClick={(e) => removeitem(v)}>Remove</button>
                    </>
                    )
                })
            }
            <h1>Total : {total}</h1>
            <button><Link to={"/payment"}>Buy</Link></button>
        </div>
    )
}

export default Cart
