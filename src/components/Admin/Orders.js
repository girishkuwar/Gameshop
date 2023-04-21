import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabaseclient';
const Orders = () => {
  const [orders, setorders] = useState([]);
  const [status, setStatus] = useState("");

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

  const updateStatus = async (id) => {
      const { data , error } = await supabase
      .from("orders")
      .update({status})
      .eq('id',id)

      if (data) {
        console.log(data);
      } else {
        console.log(error);
      }
      console.log("Order updated");
  }




  return (
    <div className='orders'>
      {
        orders.map((o) => {
          return (<>
            <div className="ordertop">
              <h5>{o.id}</h5>
              <h1>{o.user}</h1>
              <h3>{o.gamename}</h3>
              <select name="Status" onChange={(e) => setStatus(e.target.value)}>
                <option value={o.status}>{o.status}</option>
                <option value="Download">Download</option>
                <option value="Canceled">Canceled</option>
                <option value="Pending">Pending</option>
              </select>
              <button onClick={() => updateStatus(o.id)}>Change Status</button>
            </div>
          </>)
        })
      }
    </div>
  )
}

export default Orders
