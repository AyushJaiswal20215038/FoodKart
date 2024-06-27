import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OrderCard from '../components/OrderCard';

export default function MyOrder() {

    const [orderData,setOrderData] =useState([]);
    
    // const fetchMyOrder = async () =>{
    //     // console.log(localStorage.getItem('userEmail'))
    //     await fetch("http://localhost:5000/api/myorderData",{
    //         method : 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //         ,
    //         body : JSON.stringify({
    //             email : localStorage.getItem('userEmail')
    //         })
    //     }).then(async (res)=>{
    //         let response = await res.json()
    //         console.log('#response->',response);
    //         await setOrderData(response)
    //     }).catch(err=>{
    //         console.log('#err:',err);
    //     })
    // }
    const fetchMyOrder = async () => {
        // console.log(localStorage.getItem('userEmail')) // Uncomment for debugging
      
        try {
          const response = await fetch("http://localhost:5000/api/myorderData", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: localStorage.getItem('userEmail')
            })
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const resorderData = await response.json();
          console.log(typeof(Object.values(resorderData)[0]),'#response->', Object.values(resorderData)[0]);
          setOrderData(Object.values(resorderData)[0]);
        } catch (err) {
          console.error('#err:', err);
        }
      }; 
      



    useEffect(()=>{
        fetchMyOrder();

    },[]);

    console.log(typeof(Object.values(orderData)),(orderData));
    const reverseData =[...orderData].slice().reverse();
    console.log('reverseData:',reverseData);
 
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div className="container">
                <div className="row ">
                    {orderData.length !== 0 ?
                        reverseData.map((arrData, arrDataIndex)=>{
                            const orderDate= arrData[0].Order_date;
                            const checkoutItems =arrData.slice(1);
                            return (
                                <div key={arrDataIndex}>
                                <div className='m-auto mt-5'>
                                    {orderDate}
                                    <hr/>
                                </div>
                                <div>
                                    {checkoutItems.map(item=>{
                                        return (
                                            <OrderCard key={item.id} item={item}/>
                                            // <div key={item.id}>
                                            //     <div className='col-12 col-md-6 col-lg-3'>
                                            //     <div className='card mt-3' style={{ width: "16rem", maxHeight: "360px" }}>
                                            //         {/* <img src={arrayData.img} className='card-img-top' alt="..." style={{height: "120px", objectFit: "fill"}} /> */}
                                            //         <div className="card-body">
                                            //             <h5 className="card-title">{item.name}</h5>
                                            //             <div className="container w-100 p-0" style={{ height: "38px" }}>
                                            //                 <span className="m-1">{item.qty}</span>
                                            //                 <span className="m-1">{item.size}</span>
                                            //                 {/* <span className="m-1">{data}</span> */}
                                            //                 <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                            //                     Rs.{item.price}/-
                                            //                 </div>
                                            //             </div>
                                            //         </div>
                                            //     </div>
                                            //     </div>
                                            // </div>
                                        )
                                    })}
                                </div>
                                </div>
                            )
                            })
                            :
                            ""
                            } 

                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

//     return (
//         <>
//             <div>
//                 <Navbar />
//             </div>
//             <div className="container">
//                 <div className="row">
//                     {Object.keys(orderData).length !== 0 ? Array(orderData).map(data => {
//                         return (
//                             data.orderData ? 
//                                 data.orderData.order_data.slice(0).reverse().map((item) => {
//                                     return (
                                        
//                                             item.map((arrayData)=> {
//                                                 return (
//                                                     <div>
//                                                         {arrayData.Order_date ?
//                                                             <div className='m-auto mt-5'>
//                                                                 {data = arrayData.Order_date}
//                                                                 <hr />
//                                                             </div> 
//                                                             :
//                                                             <div className='col-12 col-md-6 col-lg-3'>
//                                                                 <div className='card mt-3' style={{ width: "16rem", maxHeight: "360px" }}>
//                                                                     <img src={arrayData.img} className='card-img-top' alt="..." style={{height: "120px", objectFit: "fill"}} />
//                                                                     <div className="card-body">
//                                                                         <h5 className="card-title">{arrayData.name}</h5>
//                                                                         <div className="container w-100 p-0" style={{ height: "38px" }}>
//                                                                             <span className="m-1">{arrayData.qty}</span>
//                                                                             <span className="m-1">{arrayData.size}</span>
//                                                                             <span className="m-1">{data}</span>
//                                                                             <div className='d-inline ms-2 h-100 w-20 fs-5'>
//                                                                                 Rs.{arrayData.price}/-
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         }
//                                                     </div>
//                                                 )
//                                             })
                                        
//                                     )
//                                 }): ""
                                
//                         )
//                     }) : ""}

//                 </div>

                
//             </div>


//             <div>
//                 <Footer />
//             </div>
//         </>
//     )
// }
