import React, { useEffect, useState } from 'react'
// import NavAdmin from './NavAdmin'
import AdminProfile from './AdminProfile'
// import  {IsAdmin} from '../Context/Admin/AdminState';

export default function HomeA() {
    // const isAdmin = IsAdmin().isAdmin; 
    // const update = IsAdmin().update;
    // console.log(isAdmin);

    const [Loading,setLoading]= useState(true);
    const [Info,setInfo] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/getAdminInfo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem("userEmail")
                })
            })
            // console.log(response);
            if(response.ok){
                const res= await response.json();
                // console.log(res[0].value);
                // if(res[0].value==="N/A")update("No");

                setInfo(res);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(()=>{
        fetchData();
        // if(Info.length!==0&&Info[0].value==="N/A"){
        //     alert('You are not a admin');
        //     update("No");
        // }
    },[])


    return (
        <div className='px-3'>
            <AdminProfile />
            <div className='container-fluid'>
                {!Loading?
                    <div className='row g-3 my-2'>
                    {
                    Info.map((ele)=>{
                        
                        return (
                            <div className='col-md-3 p-1'>
                                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                                    <div>
                                        <h3 className='fs-2'>{ele.value}
                                        </h3>
                                        <p className='fs-5'>{ele.name}
                                        </p>
                                    </div>
                                    <i className={ele.icon} style={{fontSize: "40px"}}>
                                    </i>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                    :
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <h3 className='fs-2'>Loading...
                            </h3>
                        </div>
                    }
            </div>
        </div>)
}
