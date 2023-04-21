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

    const downloadFile = (o) => {
        var element = document.createElement('a');
        let textfile = JSON.stringify(o);
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textfile));
        element.setAttribute('download', o.gamename+".txt");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    // Start file download.
    // download("hello.txt", "This is the content of my file :)");


    return (
        <>
            {
                (orders.length < 1) ? <Loader /> : <div className='userorders'>
                    {
                        orders.map((o,i) => {
                            return (<div className='orders-list' key={i}>
                                <h1>{o.gamename}</h1>
                                {(o.status === "Download") ? <a onClick={() => downloadFile(o)}>Download</a> : <h5>{o.status}</h5>}
                            </div>)
                        })
                    }
                </div>
            }
        </>

    )
}

export default UserOrders
