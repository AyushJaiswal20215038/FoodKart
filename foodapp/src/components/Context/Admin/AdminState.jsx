import { useState } from "react";
import AdminContext from "./ContextAdmin";


const AdminState = (props)=>{
    const [userType,setUserType]= useState('User');
    const update = (Type)=>{
        setUserType(Type);
    }

    return (
        <AdminContext.Provider value={{userType ,update}}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;