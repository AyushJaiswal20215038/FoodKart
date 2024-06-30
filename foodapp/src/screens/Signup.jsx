import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'

export default function Signup() {
    let navigate = useNavigate();

    const [userType,setuserType]=useState('User');
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "", adminSecret: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation,
                adminSecret: credentials.adminSecret
            })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter Valid Credentials");
        }
        if(json.success){
            navigate("/login");
        }
    }

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    const onChangeRadio= (event)=>{
        setuserType(event.target.value);
        // setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }
    

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value='User' onChange={onChangeRadio} defaultChecked />
                        <label className="form-check-label" htmlFor="inlineRadio1">User</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value='Admin' onChange={onChangeRadio} />
                        <label className="form-check-label" htmlFor="inlineRadio2">Admin</label>
                    </div>
                    {userType === "Admin" ?
                        (<div className="mb-3">
                            <label htmlFor="name" className="form-label">secret key</label>
                            <input type="text" className="form-control" name='adminSecret' value={credentials.adminSecret} onChange={onChange} />
                        </div>)
                        : ""
                    }
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
                </form>
            </div>
        </>
    )
}
