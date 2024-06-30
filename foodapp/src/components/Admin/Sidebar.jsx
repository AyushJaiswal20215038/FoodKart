import React from 'react'
// import { Link } from 'react-router-dom'
import './styleAdmin.css';

export default function Sidebar({changePage}) {

    return (
        <div>
            <div className="bg-white sidebar p-2">
                <div className="m-2">
                    <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
                    <span className="brand-name fs-4">Foodkart <sub>admin</sub></span>
                </div>
                <hr className="text-dark" />
                <div className="list-group list-group-flush">
                    <div  className="list-group-item py-2" onClick={()=>changePage(1)}>
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">Dashboard</span>
                    </div>
                    <div className="list-group-item py-2" onClick={()=>changePage(2)}>
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">User Details</span>
                    </div>
                    <div className="list-group-item py-2" onClick={()=>changePage(3)}>
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">Received Orders</span>
                    </div>
                    <div className="list-group-item py-2" onClick={()=>changePage(4)}>
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">Food Items</span>
                    </div>
                    <div className="list-group-item py-2" onClick={()=>alert("Logout")}>
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">Logout</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
