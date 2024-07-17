import React, { useEffect, useState } from 'react'
import UserOrder from './UserOrder';

function ReceivedOrder() {
  const [OrderData, setOrder] = useState([]);


  const fetchMyOrder = async () => {
    // console.log(localStorage.getItem('userEmail')) // Uncomment for debugging

    try {
      const response = await fetch("http://localhost:5000/api/receivedOrder", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const resOrderData = await response.json();
      setOrder(resOrderData);
      // console.log(resOrderData);
    } catch (err) {
      console.error('#err:', err);
    }
  };
  useEffect(() => {
    fetchMyOrder();
  }, [])

  return (
    <div>
      <h2>Received Order</h2>
      {
        OrderData.map((ordered_user, index) => {
          let orderData=ordered_user.order_data.reverse();
          // console.log(orderData);
          return (
            <div className="container my-2" key={index}>
              <div className="card">
                <h5 className="card-header">{ordered_user.email}</h5>
                <div className="card-body">
                  <UserOrder orders={orderData}/>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ReceivedOrder;
