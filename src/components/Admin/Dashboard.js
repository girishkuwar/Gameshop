import React, { useEffect, useState } from 'react'
import supabase from '../../config/supabaseclient';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalorders, setTotalorders] = useState(0);
    const [totaldelevered, setTotaldelevered] = useState(0);
    const [c_quries, setC_quries] = useState(0);
    const [payments, setPayments] = useState([]);
    const [total, setTotal] = useState(0);


    const sumArray = (array) => {
        let sum = 0;
        array.forEach(item => {
            sum += item.total;
        });
        return sum;
    }

    const getCustomersCount = async () => {
        const { error, data, count } = await supabase
            .from('users')
            .select('*', { count: 'exact' })
        setTotalCustomers(count);
    }


    const getProductsCount = async () => {
        const { error, data, count } = await supabase
            .from('games')
            .select('*', { count: 'exact' })
        setTotalProducts(count);
    }

    const getQuriesCount = async () => {
        const { error, data, count } = await supabase
            .from('contactus')
            .select('*', { count: 'exact' })
        setC_quries(count);
    }

    const getOrdesCount = async () => {
        const { error, data, count } = await supabase
            .from('orders')
            .select('*', { count: 'exact' })
        setTotalorders(count);
    }

    const fetchpayments = async () => {
        const { data, error } = await supabase
            .from("payment")
            .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            // console.log(data);
            setPayments(data);
            setTotal(sumArray(data));
        }
    }

    const getDeleveredorders = async () => {
        // const coll = collection(db, "orders");
        // const q = query(coll, where("status", "==", "Delevered"));
        // const snapshot = await getCountFromServer(q);
        // setTotaldelevered(snapshot.data().count)
    }

    useEffect(() => {
        getCustomersCount();
        getProductsCount();
        getOrdesCount();
        getQuriesCount();
        fetchpayments();
    }, [])



    return (
        <div>
            <div className="dashboard-menu">
                <div className="d-card">
                    <NavLink to={"bills"}>  <i class="fa fa-money glow"></i> </NavLink>
                    <h3>Total Earning  : Rs. {total}</h3>
                </div>
                <div className="d-card">
                    <NavLink to={"users"}>   <i class="fa fa-users glow"></i> </NavLink>
                    <h3>Customers : {totalCustomers}</h3>
                </div>
                <div className="d-card">
                    <NavLink to={"gamelist"}> <i class="fa fa-archive glow"></i> </NavLink>
                    <h3>Products : {totalProducts}</h3>
                </div>
            </div>
            <div className="dashboard-menu">
                <div className="d-card">
                    <NavLink to={"orders"}> <i class="fa fa-truck glow"></i> </NavLink>
                    <h3>Sold  : {totalorders}</h3>
                </div>
                <div className="d-card">
                    <NavLink to={"contacted"}> <i class="fa fa-address-card glow"></i> </NavLink>
                    <h3>Customer Queris  : {c_quries}</h3>
                </div>
                {/* <div className="d-card">
                    <i class="fa fa-shopping-cart glow"></i>
                    <h3>Orders : {totalorders}</h3>
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard