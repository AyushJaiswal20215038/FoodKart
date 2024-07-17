import { useContext, useState } from "react";
import AdminContext from "./ContextAdmin";


const AdminState = (props)=>{
    const [isAdmin,setIsAdmin]= useState('');
    const update = (Type)=>{
        setIsAdmin(Type);
    }

    return (
        <AdminContext.Provider value={{isAdmin ,update}}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;
export const IsAdmin = ()=> useContext(AdminContext);