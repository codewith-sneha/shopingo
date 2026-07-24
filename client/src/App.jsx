import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'

import Cart from './pages/Cart';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Contact from './pages/Contact';
import About from './pages/About';
import Nav from './component/Nav';
import Login from './pages/Login';
import Footer from './component/Footer';
import Search from './component/Search';
// import { ToastContainer , toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
import Orders from "./pages/Orders";


const App = () => {
  return (
    <div className='px-[4vw] sm:px-[5vw] lg:px-[7vw] '>
      <Nav/>
      <Search/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/product/:productId' element={<Product/>} />
      <Route path='/placeOrder' element={<PlaceOrder/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/orders' element={<Orders/>} />

    </Routes>
    <Footer/>
    </div>
  )
}

export default App