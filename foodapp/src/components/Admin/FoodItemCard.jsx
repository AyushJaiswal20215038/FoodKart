import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatchItem, useItem } from '../Context/FoodItemReducer';



const FoodItemCard = (props) => {


    const dispatch = useDispatchItem();
    const Items = useItem();
    const [Loading,setLoading]=useState(false);
    const [itemName, setItemName]=useState(props.foodItem.name);

    const handleDelete = async()=>{
        try {
            const response = await fetch("http://localhost:5000/api/deleteFoodItem", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Item: itemName
                })
            });
            
            if(response.ok){
                setLoading(false);
                // console.log('itemName:',itemName);
                dispatch({type: "DELETE", ItemName: itemName});
                return;
            }

            // else {
            // }
            // console.log('#Item',Items);
            const res = response.json();
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }

    const handleButton = (e)=>{
        setLoading(true);
        handleDelete();
    }
    
    let options=Object.entries(props.options);
    let foodItems= props.foodItem;
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={foodItems.img} className="card-img-top" style={{ height: "120px", objectFit: "fill" }} alt="Something is wrong"/>
                    <table className="card-body">
                        <h5 className="card-title">{foodItems.name}</h5>
                        <p className="card-text">{foodItems.description}</p>
                        {options.map((opt,optIndex)=>{
                            return (
                                <tr key={optIndex}>
                                    <td>{opt[0]}: </td>
                                    <td>Rs. {opt[1]}/-</td>
                                </tr>
                            )
                        })}
                        {!Loading ?
                            <button onClick={(e)=>handleButton(e)} className="btn btn-primary" >Delete</button>
                            : <button className="btn btn-primary" disabled >Delete...</button>
                        }
                    </table>
            </div>
        </div>
    )
}

export default FoodItemCard
