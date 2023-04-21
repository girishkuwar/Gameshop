import React, { useState } from 'react'
import { useEffect } from 'react'
import supabase from '../../config/supabaseclient';
import { useNavigate } from 'react-router-dom';
import "./userorder.css"
import Loader from '../../components/Loader';

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
        <>
            {
                (orders.length < 1) ? <Loader /> : <div className='userorders'>
                    {
                        orders.map((o) => {
                            return (<div className='orders-list'>
                                <h1>{o.gamename}</h1>
                               {(o.status === "Download") ? <a href="/">Downlaod</a> : <h5>{o.status}</h5>} 
                            </div>)
                        })
                    }
                </div>
            }
        </>

    )
}

export default UserOrders
