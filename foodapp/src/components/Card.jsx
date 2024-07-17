import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {

let dispatch = useDispatchCart();
let data= useCart();
let options = props.options;
let priceOptions = Object.keys(options);
const priceRef= useRef();
const [showDesc,setShowDesc]=useState(false);
const [qty,setQty] = useState(1);
const [size,setSize] = useState("");

    const handleAddToCart = async () => {
        let food= []
        for (const item of data){
            if (item.id=== props.foodItem._id){
                food = item;

                break;
            }
        }
        if (food.length !== 0){
            if(food.size=== size){
                await dispatch({type: "UPDATE" ,id:props.foodItem._id ,price: finalPrice, qty: qty})
                return 
            }
            else if (food.size !== size){
                await dispatch({type: "ADD",id: props.foodItem._id,img: props.foodItem.img ,name: props.foodItem.name, price: finalPrice, qty: qty, size : size});
                return
            }
            return 
        }
        else
            await dispatch({type: "ADD",id: props.foodItem._id,img: props.foodItem.img , name: props.foodItem.name, price: finalPrice, qty: qty, size : size});
        // console.log(data);
    }
    let finalPrice= qty * parseInt(options[size]);

    useEffect(()=>{
        setSize(priceRef.current.value)
    }, [])

    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" style={{ height: "120px", objectFit: "fill" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    {/* <p className="card-text">Some quick example text</p> */}
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-success rounded'onChange={(e)=> setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Rs.{finalPrice}/-
                        </div>
                        <hr />
                        <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div><p style={{textAlign:"center", cursor:"pointer"}} onClick={()=>setShowDesc(showDesc===false)}>{!showDesc?"⩣":"⩞"}</p>
                
                {showDesc?
                    <p>{props.foodItem.description}</p>
                    :""
                }</div>
            </div>
        </div>
    )
}
