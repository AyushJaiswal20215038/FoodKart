import React from 'react'
import { Link } from 'react-router-dom';

const FoodItemCard = (props) => {
    let options=Object.entries(props.options);
    let foodItems= props.foodItem;
    return (
        <div>
            <div class="card" style={{width: '18rem'}}>
                <img src={foodItems.img} class="card-img-top" style={{ height: "120px", objectFit: "fill" }} alt="Something is wrong"/>
                    <div class="card-body">
                        <h5 class="card-title">{foodItems.name}</h5>
                        <p class="card-text">{foodItems.description}</p>
                        {options.map((opt)=>{
                            return (
                                <tr>
                                    <td>{opt[0]}: </td>
                                    <td>Rs. {opt[1]}/-</td>
                                </tr>
                            )
                        })}
                        <Link to="/adminPage" class="btn btn-primary">Delete</Link>
                    </div>
            </div>
        </div>
    )
}

export default FoodItemCard
