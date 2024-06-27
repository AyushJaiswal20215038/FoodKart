import React from 'react'
import Sidebar from '../components/Admin/Sidebar'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import HomeAdmin from '../components/Admin/HomeAdmin'

export default function AdminPage() {
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <Sidebar/>
        </div>
        <div className="col-auto">
          <HomeAdmin/>
        </div>
      </div>
    </div>
  )
}