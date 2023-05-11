import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import supabase from '../../config/supabaseclient';
import "./invoice.css"

const Invoice = () => {
  const { id } = useParams();
  const [payment, setpayment] = useState([]);
  const [user, setuser] = useState([]);
  const [orders, setOrders] = useState([])

  const logger = (data) => {
    console.log(data);
  }

  const getPayment = async () => {
    const { data, error } = await supabase
      .from("payment")
      .select('*,orders(*)')
      .eq('id', id)
      .single()

    if (data) {
      setpayment(data);
      setOrders(data.orders);
      getUser(data.customer_id);
    } else {
      console.log(error);
    }
  }

  const getUser = async (userid) => {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('id', userid)
      .single()

    if (data) {
      setuser(data);
    } else {
      console.log(error);
    }
  }




  useEffect(() => {
    getPayment();
  }, [])



  return (
    <div>
      <div className="bill">
        <h1>Your Bill</h1>
        <h2>Name : {user.name}</h2>
        <h2>Email : {user.email}</h2>
        <h3>Total Item : {payment.quantity}</h3>
        {
          orders.map((e) => {
            return (<>
              <h2>{e.gamename}</h2>
            </>)
          })
        }
        <h3>Total price : {payment.total}</h3>
        <h3>Payment mode : {payment.payment_mode}</h3>

      </div>
      <h1 className='mygames'> Games Added To <Link to={"/userorders"} >MyGames</Link> </h1>

    </div>
  )
}

export default Invoice