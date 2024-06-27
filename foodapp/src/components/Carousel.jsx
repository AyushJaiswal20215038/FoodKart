import React from 'react'
// import { Link } from 'react-router-dom'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important" , maxHeight : "600px"}}>
                <div className="carousel-inner" style={{ height: "63vw", maxHeight : "600px" }}>
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
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
    )
}
