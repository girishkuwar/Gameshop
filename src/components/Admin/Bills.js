import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabaseclient';

const Bills = () => {
    const [payments, setPayments] = useState([]);


    const getOrder = async () => {
        const { data, error } = await supabase
          .from("payment")
          .select()
  
        if (data) {
          setPayments(data);
        } else {
          console.log(error);
        }
        console.log("done");
      }

    useEffect(() => {
        getOrder();
    }, [])
    let total = 0;
    for (let i = 0; i < payments.length; i++) {
        total += payments[i].total;
    }
  return (
    <div className='bills'>
      <div className="tbl">
        <table>
        <tr>
          <th>Payment ID</th>
          <th>Total</th>
          <th>mode</th>
          <th>Quantity</th>
          <th>customer Id</th>
        </tr>
        {
          payments.map((o) => {
            return(<tr>
              <td>{o.id}</td>
              <td>{o.total}</td>
              <td>{o.payment_mode}</td>
              <td>{o.quantity}</td>
              <td>{o.customer_id}</td>
            </tr>)
          })
        }
      </table>
      </div>
      <h1>Total : Rs. {total}</h1>
    </div>
  )
}

export default Bills