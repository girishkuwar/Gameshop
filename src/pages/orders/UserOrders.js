import React, { useState } from 'react'
import { useEffect } from 'react'
import supabase from '../../config/supabaseclient';
import { useNavigate } from 'react-router-dom';

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
    }, [])

    return (
        <div>
            {
                orders.map((o) => {
                    return(<>
                    <h1>{o.gamename}</h1>
                    <h5>{o.status}</h5>
                    </>)
                })
            }
        </div>
    )
}

export default UserOrders
