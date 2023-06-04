import React, { useState } from 'react'
import { useEffect } from 'react'
import supabase from '../../config/supabaseclient';
import { useNavigate } from 'react-router-dom';
import "./userorder.css"
import Loader from '../../components/Loader';

const UserOrders = () => {
    const [orders, setorders] = useState([]);
    const [msg, setmsg] = useState("Wait");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        setLoader(true)
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
                if (data.length === 0) {
                    setmsg("No games Added")
                }
                setLoader(false);
            } else {
                console.log(error);
                setLoader(false);
            }
            console.log("done");
        }
        getOrder();
    }, [navigate])

    const downloadFile = (o) => {
        const getLink = async () => {
            const { data, error } = await supabase
                .from("games")
                .select('link')
                .eq('id', o.gameid)

            if (data) {
                console.log(data);
                downloadlink(data[0].link);
            } else {
                console.log(error);

            }
        }
        getLink();
        // var element = document.createElement('a');
        // let textfile = JSON.stringify(o);
        // element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textfile));
        // element.setAttribute('download', o.gamename + ".msi");
        // element.style.display = 'none';
        // document.body.appendChild(element);
        // element.click();
        // document.body.removeChild(element);
    }


    const downloadlink = (l) => {
        console.log(l);
        fetch(l).then(res => res.blob()).then(file => {
            let tempurl = URL.createObjectURL(file);
            let atag = document.createElement("a");
            atag.href = tempurl;
            atag.download = l;
            
            document.body.appendChild(atag);
            
            atag.click();
            
            atag.remove();
            
            URL.revokeObjectURL(tempurl);
            console.log(atag);
        }).catch("Note", "Cant Download This File");
    }

    return (
        <>
            {/* {
                (orders.length < 1) ? <Loader /> : <div className='userorders'>
                    {
                        orders.map((o, i) => {
                            return (<div className='orders-list' key={i}>
                                <h1>{o.gamename}</h1>
                                {(o.status === "Download") ? <a onClick={() => downloadFile(o)}>Download</a> : <h5>{o.status}</h5>}
                            </div>)
                        })
                    }
                </div>
            } */}
            {
                (orders.length > 0) && <>  <div className='userorders'>
                    {
                        orders.map((o, i) => {
                            return (<div className='orders-list' key={i}>
                                <h1>{o.gamename}</h1>
                                {(o.status === "Download") ? <a onClick={() => downloadFile(o)}>Download</a> : <h5>{o.status}</h5>}
                            </div>)
                        })
                    }
                </div>
                </>
            }
            {
                (orders.length === 0) && <><h1 className='nothing'>{msg}</h1></>
            }

            {(loader) && <div className="loader-m"><Loader /></div>}
        </>

    )
}

export default UserOrders
