import React from 'react'

function Nav({ Toggle }) {
    return (    <>
    <div className="navbar navbar-expand-sm navbar-dark bg-transparent">            
        <i className="navbar-brand bi bi-justify-left fs-4" />           
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <i className='bi bi-justify'/>
        </button>            
        <div className="collapse navbar-collapse" id="collapsibleNavId">                
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">                    
                <li className="nav-item dropdown">                        
                    <Link className="nav-link dropdown-toggle text-white" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Foodkart</Link>                        
                    <div className="dropdown-menu" aria-labelledby="dropdownId">                            
                        <Link className="dropdown-item" to="#">Profile</Link>                            
                        <Link className="dropdown-item" to="#">Setting</Link>                            
                        <Link className="dropdown-item" to="#">Logout</Link>                        
                    </div>                    
                </li>                
            </ul>            
        </div>        
    </div></>  
)
}
export default Nav;
