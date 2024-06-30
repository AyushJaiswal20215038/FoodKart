import React, { useEffect, useReducer, useState } from 'react'

const initialState = {
    loading: true,
    error: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something went wrong'
            }

        default:
            return state
    }
}


function UserDetail() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [userData, setUserData] = useState([]);

    const fetchMyOrder = async () => {
        // console.log(localStorage.getItem('userEmail')) // Uncomment for debugging

        try {
            const response = await fetch("http://localhost:5000/api/userData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });

            if (!response.ok) {
                dispatch({ type: 'FETCH_ERROR' })
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const resuserData = await response.json();
            console.log(resuserData);
            dispatch({ type: 'FETCH_SUCCESS' })
            setUserData(resuserData.userData);
        } catch (err) {
            console.error('#err:', err);
            dispatch({ type: 'FETCH_ERROR' })
        }
    };

    const onDelete=async (user_info)=>{
        try {
            const response=await fetch("http://localhost:5000/api/deleteUserData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userInfo: user_info
                })
            })
            const deletedUser=await response.json();
            if(deletedUser.result.acknowledged){
                fetchMyOrder();
            }
            console.log('#deletedUser',deletedUser);
        } catch (error) {
            dispatch({type:'FETCH_ERROR'})
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMyOrder();
    }, []);
    console.log(state.error);

    return (
        <div>
            <h2>UserDetail</h2>
            <div>
                <div className='container m-auto mt-5 table-responsive table-responsive-md'>

                    {state.loading === true ?
                        <h3>Loading....</h3>
                        : state.error !== '' ?
                            <h3>{state.error}</h3>
                            : userData.length !== 0 ?
                                <table className='table table-hover table-striped table-bordered'>
                                    <tbody>
                                        {userData.map((arrData, arrDataIndex) => {
                                            return (

                                                <tr key={arrDataIndex}>
                                                    <th scope='row'>{arrDataIndex + 1}</th>
                                                    <td>{arrData.name}</td>
                                                    <td>{arrData.email}</td>
                                                    <td>{arrData.location}</td>
                                                    <td>{arrData.date.split("T", 1)}</td>
                                                    <td><button type='button' className='btn p-0 text-danger' onClick={()=>{onDelete({email:arrData.email,name:arrData.name})}}>Delete </button></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>

                                </table>
                                : 'No User Available'
                    }

                </div>
            </div>
        </div>
    )
}

export default UserDetail;

