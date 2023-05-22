import React, { useEffect, useState } from 'react';
import { customerContext } from '../../Context/Context';
import { useContext } from 'react';
import OrderRow from './OrderRow/OrderRow';

const Order = () => {
    const { user } = useContext(customerContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    return (
        <div className='m-16'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <button className="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Order</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            orders.map(order => <OrderRow order={order} key={order._id}></OrderRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Order;