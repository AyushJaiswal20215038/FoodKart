import React, { useState } from 'react'
import Sidebar from '../components/Admin/Sidebar'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import PageSpace from '../components/Admin/PageSpace'



export default function AdminPage() {
  const [pageNum,setPageNum]=useState(1);
  function changePage(num) {
    setPageNum(num);
  }

  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className="row">
        <div className="col-2 bg-white">
          <Sidebar changePage={changePage}/>
        </div>
        <div className="col-auto" >
          <PageSpace page={pageNum}/>
        </div>
      </div>
    </div>
  )
}
