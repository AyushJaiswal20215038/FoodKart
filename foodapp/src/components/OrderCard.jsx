import React from 'react'

export default function OrderCard({item}) {
    return (
        <>
            <div >
                <div className='col-12 col-md-6 col-lg-3'>
                    <div className='card mt-3' style={{ width: "16rem", maxHeight: "360px" }}>
                        {/* <img src={arrayData.img} className='card-img-top' alt="..." style={{height: "120px", objectFit: "fill"}} /> */}
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <div className="container w-100 p-0" style={{ height: "38px" }}>
                                <span className="m-1">{item.qty}</span>
                                <span className="m-1">{item.size}</span>
                                {/* <span className="m-1">{data}</span> */}
                                <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                    Rs.{item.price}/-
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
