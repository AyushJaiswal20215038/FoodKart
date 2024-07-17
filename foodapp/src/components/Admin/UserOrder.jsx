import React from 'react'
import './styleAdmin.css'

const UserOrder = ({ orders }) => {
    // console.log('props', orders);
    return (
        <div className="container">
            <table class="table">
                {orders.map((order, index) => {
                    // console.log('order', order);
                    const orderDate = order[0].Order_date;
                    const Order_data = order.slice(1);
                    return (
                        <div key={index}>
                            <thead>
                                <th>{orderDate}</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#</td>
                                    <td>Name</td>
                                    <td>Size</td>
                                    <td>price</td>
                                    <td>Qty</td>
                                </tr>
                                {Order_data.map((data, data_index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{data_index+1}</th>
                                            <td>{data.name}</td>
                                            <td>{data.size}</td>
                                            <td>{data.price}</td>
                                            <td>{data.qty}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </div>)
                })}
            </table>

        </div>
    )
}

export default UserOrder
