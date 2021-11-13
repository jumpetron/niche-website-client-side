import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css'


const MyOrder = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);


    useEffect(() => {
        const url = `https://enigmatic-anchorage-98613.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])



    //handleDelete
    const handleDeleteOrder = id => {
        const url = `https://enigmatic-anchorage-98613.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Your order canceled');
                    const exitingOrders = myOrders.filter(order => order._id !== id);
                    setMyOrders(exitingOrders);
                }
            })
    }

    return (
        <div>
            <h2 className="py-5">My Order List</h2>
            <div>
                {
                    myOrders.map(myOrder => <div
                        className="order-container"
                        key={myOrder._id}
                        myOrder={myOrder}
                    >
                        <h2>Name: {myOrder.userName}</h2>
                        <h3>Email: {myOrder.email}</h3>
                        <h2>productName: {myOrder.productName}</h2>
                        <h4>Phone: {myOrder.phone}</h4>
                        <h4>Address: {myOrder.address}</h4>
                        <Button className="my-3" onClick={() => handleDeleteOrder(myOrder._id)} variant="danger">Cancel Order</Button>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrder;