import React, { useContext, useState } from 'react'
import cartContext from '../../context/CartContext';
import "./payment.css"
import supabase from '../../config/supabaseclient';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [error, setError] = useState(null);
    const cartc = useContext(cartContext);
    const user = localStorage.getItem("user");
    const userid = localStorage.getItem("userid");
    const navigate = useNavigate();


    let gameslist = cartc.cart;
    let total = 0;
    for (let i = 0; i < gameslist.length; i++) {
        total += gameslist[i].price;
    }

    const buyItems = () => {
        for (let i = 0; i < gameslist.length; i++) {
            addData(gameslist[i].id, gameslist[i].name);
        }
        if(!error){
            cartc.EmptyCart();
            navigate("/");
        }

    }


    const addData = async (id, name) => {
        const { data, error } = await supabase
            .from('orders')
            .insert([{ user, userid, gameid: id, gamename: name, status: "Pending"}])
        if (error) {
            setError(error);
            console.log(error);
        } else {
            console.log("done");
        }
        alert("game added")
    }
    return (
        <div>
            <div className="payment-page">
                <h4>Total item {gameslist.length}</h4>
                <h5>Total :Rs {total}</h5>
                <h5>Cash On Delevery</h5>
                <button onClick={buyItems}>Procced</button>
            </div>
        </div>
    )
}

export default Payment
