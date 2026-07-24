import React, { createContext, useEffect, useState } from 'react'

export const AdminContext = createContext();

export const AdminContextProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const values ={token,setToken , backendUrl};
    useEffect(()=>{
        localStorage.setItem('token',token);
    },[token])

  return (
    <AdminContext.Provider value={values}>
        {children}
    </AdminContext.Provider>
  )
}

