import React, { useState } from 'react'
import { useEffect } from 'react'
import supabase from '../../config/supabaseclient';
import { useNavigate } from 'react-router-dom';
import "./userorder.css"

const UserOrders = () => {
    const [orders, setorders] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const userid = localStorage.getItem('userid');
        if (!userid) {
            navigate('/login');
        }
        const getOrder = async () => {
            const { data, error } = await supabase
                .from("orders")
                .select()
                .eq('userid', userid)

            if (data) {
                setorders(data);
            } else {
                console.log(error);
            }
            console.log("done");
        }
        getOrder();
    }, [navigate])

    return (
        <div className='userorders'>
            {
                orders.map((o) => {
                    return(<div className='orders-list'>
                    <h1>{o.gamename}</h1>
                    <h5>{o.status}</h5>
                    </div>)
                })
            }
        </div>
    )
}

export default UserOrders
