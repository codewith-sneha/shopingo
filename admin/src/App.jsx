import React, { useContext } from 'react'
import Nav from './component/Nav'
import Sidebar from './component/Sidebar'
import { Route, Router, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { AdminContext } from './context/AdminContext'
import Login from './component/Login'
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const {token} = useContext(AdminContext);
  return (
    <div className='min-h-screen'>
      <ToastContainer/>
      {token===''?<Login/>:
      <>
   <Nav/>
  <div className='pl-15 pt-2'>
     <Routes>
    <Route path='/' element={<List/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/orders' element={<Orders/>}/>
   </Routes>
  </div>
   </>
      }
   
   </div>
  )
}

export default App