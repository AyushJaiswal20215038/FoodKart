import React from 'react'
// import NavAdmin from './NavAdmin'
import AdminProfile from './AdminProfile'


export default function HomeA() {
    return (
        <div className='px-3'>
            <AdminProfile/>
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>230
                                </h3>
                                <p className='fs-5'>Food Items
                                </p>
                            </div>
                            <i className='bi bi-cart-plus p-3 fs-1'>
                            </i>
                        </div>
                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>2450
                                </h3>
                                <p className='fs-5'>Orders
                                </p>
                            </div>
                            <i className='bi bi-cart-plus p-3 fs-1' />
                        </div>
                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>1250
                                </h3>
                                <p className='fs-5'>Users
                                </p>
                            </div>
                            <i className='bi bi-truck p-3 fs-1'>
                            </i>
                        </div>
                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20
                                </h3>
                                <p className='fs-5'>Food Categories
                                </p>
                            </div>
                            <i className='bi bi-graph-up-arrow p-3 fs-1'>
                            </i>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table caption-top bg-white rounded mt-2">
                <caption className='text-white fs-4'>Recent Orders
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Date
                        </th>
                        <th scope="col">Email
                        </th>
                        <th scope="col">Order
                        </th>
                        <th scope="col">Qty
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1 Dec
                        </th>
                        <td>asd123@sasd.com
                        </td>
                        <td>Chicken Cheese Pizza
                        </td>
                        <td>3
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                        </th>
                        <td>
                        </td>
                        <td>Chicken Cheese Curry
                        </td>
                        <td>6
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2 Jan
                        </th>
                        <td>Jacob@asd.com
                        </td>
                        <td>Chicken Cheese Pizza
                        </td>
                        <td>5
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}
