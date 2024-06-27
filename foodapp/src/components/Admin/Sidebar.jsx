import React from 'react'
import { Link } from 'react-router-dom'
import './styleAdmin.css';

export default function Sidebar() {
    return (
        <div>
            <div className="bg-white sidebar p-2">
                <div className="m-2">
                    <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
                    <span className="brand-name fs-4">Foodkart <sub>admin</sub></span>
                </div>
                <hr className="text-dark" />
                <div className="list-group list-group-flush">
                    <Link to="/adminPage" className="list-group-item py-2">
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">Dashboard</span>
                    </Link>
                    <Link to="/" className="list-group-item py-2">
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">User Details</span>
                    </Link>
                    <Link to="/" className="list-group-item py-2">
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">Received Orders</span>
                    </Link>
                    <Link to="/" className="list-group-item py-2">
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">Food Items</span>
                    </Link>
                    <div className="list-group-item py-2" onClick={()=>alert("Logout")}>
                        <i className="bi bi-speedometer2 fs-5 me-3"></i>
                        <span className="fs-5">Logout</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
