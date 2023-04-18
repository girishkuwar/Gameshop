import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabaseclient';

const Orders = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      const { data, error } = await supabase 
        .from("orders")
        .select()

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
          return (<>
          <div className="ordertop">
            <h1>{o.user}</h1>
            <h3>{o.gamename}</h3>
            <h5>{o.status}</h5>
            <button>Change Status</button>
          </div>
          </>)
        })
      }
    </div>
  )
}

export default Orders
