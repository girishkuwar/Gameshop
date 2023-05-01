import React, { useContext, useState } from 'react'
import cartContext from '../../context/CartContext';
import "./payment.css"
import supabase from '../../config/supabaseclient';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [error, setError] = useState(null);
    const [cardNo, setCardNo] = useState(0);
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
        if (!error) {
            cartc.EmptyCart();
            navigate("/");
        }

    }

    const cheackCard = () => {
        if (cardNo.length === 16) {
            buyItems();
        }
        else {
            alert("Please enter a valid credit card number.");
        }
    }



    const addData = async (id, name) => {
        const { data, error } = await supabase
            .from('orders')
            .insert([{ user, userid, gameid: id, gamename: name, status: "Download" }])
        if (error) {
            setError(error);
            console.log(error);
        } else {
            console.log("done");
        }
        alert("Ready For Play")
    }
    return (
        <div className='payment'>
            <div className="payment-page">
                <h4>Total item {gameslist.length}</h4>
                <h5>Total :Rs {total}</h5>
            </div>
            <div className="container">
                <form action="" onSubmit={cheackCard}>
                    <div className="inputbox">
                        <span>Card number</span>
                        <input type="number" maxLength={16} className='card-number-input' onChange={(e) => setCardNo(e.target.value)} />
                    </div>
                    <div className="inputbox">
                        <span>Card holder</span>
                        <input type="text" className='card-holder-input' />
                    </div>
                    <div className="flexbox">
                        <div className="inputbox">
                            <span>expiry mm </span>
                            <select name="" id="" className='month-input'>
                                <option value="month" selected disabled>month</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div className="inputbox">
                            <span>expiry yy </span>
                            <select name="" id="" className='year-input'>
                                <option value="year" selected disabled>year</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                        </div>
                        <div className="inputbox">
                            <span>cvv</span>
                            <input type="text" maxLength={3} className='cvv-input' />
                        </div>
                    </div>
                    <input type="submit" value='submit' className='submit-btn' />
                </form>
            </div>
        </div>
    )
}

export default Payment
