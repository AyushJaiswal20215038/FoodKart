import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
    const [search, setSearch] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/getfoodItems", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();

        setFoodItem(response[0]);
        setFoodCat(response[1]);
        // console.log(response[0],response[1]);
    }

    useEffect(() => {
        loadData();
    }, []);




    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" style={{ maxHeight: "63vw" }}>
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <form className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                            </form>
                        </div>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ filter: "brightness(0.3)" }} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ filter: "brightness(0.3)" }} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ filter: "brightness(0.3)" }} alt="Third slide" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        {/* <span className="sr-only">Previous</span> */}
                    </button>
                    <button className="carousel-control-next" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        {/* <span className="sr-only">Next</span> */}
                    </button>
                </div>
            </div>
            <div className='container'>
                {
                    // console.log(foodCat.length)
                    (foodCat.length !== 0) ?
                        foodCat.map((data) => {
                            return <div key={data._id} className='row mb-3'>
                                <div  className='fs-3 m-3'>
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {foodItem.length !== 0 ?
                                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toString().toLowerCase().includes(search.toLocaleLowerCase())))
                                        .map((filterItems,ItemIndex) => {
                                            return (
                                                <div key={ItemIndex} className='col-12 col-md-6 col-lg-3'>
                                                    <Card foodItem={filterItems}
                                                        options={filterItems.options[0]}
                                                    />
                                                </div>
                                            )
                                        })
                                    : <div> No Such Data Found </div>
                                }
                            </div>
                        })

                        : ""

                }
            </div>
            <div><Footer /></div>
        </div>
    )
}
