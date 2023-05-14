import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabaseclient';
import "./admin.css"

const Contactus = () => {
    const [users, setusers] = useState([]);

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        const { data, error } = await supabase
            .from("contactus")
            .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data);
            setusers(data);
        }
    }

    return (
        <div className='contacts'>
           <div className="container">
                {
                    users.map((e) => {
                        return(<div className='card'>
                        <h1>{e.name}</h1>
                        <h3>{e.email}</h3>
                        <h5>{e.subject}</h5>
                        <p>{e.msg}</p>
                        </div>)
                    })
                }
           </div>
        </div>
    )
}

export default Contactus