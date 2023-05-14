import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import cartContext from '../../context/CartContext';
import "./cart.css"

const Cart = () => {
    let [games, setgames] = useState([]);
    const cartc = useContext(cartContext);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        const cartid = localStorage.getItem('cart_id');
        const cart = localStorage.getItem('cart');
        if (!auth) {
            navigate('/login');
        }
        if (!cart) {
            alert("Cart IS Empty");
            navigate('/productlist');
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
    
    return (<>
        <div className='cart-list'>
            {
                games.map((v) => {
                    return (<><div className='cart-item'>
                        <img src={v.imgurl} alt="" style={{ width: "200px" }} />
                        <div className="flexbox">
                            <Link to={"/productpage/" + v.id}><h1>{v.name}</h1></Link>
                            <p>Rs. {v.price}</p>
                            <button onClick={(e) => removeitem(v)}>Remove</button></div>
                    </div>
                        <div className="line"></div></>
                    )
                })
            }
            <div className="total">
                <h1>Total : Rs. {total}</h1>
                <Link to={"/payment"}><button>Buy</button></Link></div>
        </div>
    </>

    )
}

export default Cart
