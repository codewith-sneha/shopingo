import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assets/frontend_assets/assets';
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShopContext = createContext();

export const ShopContextProvider = ({children}) => {

    const currency ='₹';
    const deliveryFees = 40;
     const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("");
    const [token, setToken] = useState('')
    const [cartItems, setCartItems] = useState({});
     const [totalAmount, setTotalAmount] = useState(0)
const [products, setProducts] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

const getProducts = async ()=>{
  try {
  const response = await axios.get(backendUrl+'api/product/list');
  if(response.data.success){
    // console.log(response.data.products)
    setProducts(response.data.products);
  }
  else{
    console.log(response.data.message);
  }
} catch (error) {
  console.log(error.message);
}
}

useEffect(()=>{
   if(!token && localStorage.getItem('token')){
    setToken(localStorage.getItem('token'));
   }
},[])

useEffect(()=>{
getProducts();
},[])

    const addItem =(itemId,size)=>{
      const cartData = structuredClone(cartItems);
      if(cartData[itemId]){
        if(cartData[itemId][size]){
          cartData[itemId][size]+=1;
        }
        else{
          cartData[itemId][size]=1;
        }
      }
      else{
        cartData[itemId]={};
        cartData[itemId][size]=1;
      }
      setCartItems(cartData);
    }

const getCartCount =()=>{
  let totalCount = 0;
  for(let items in cartItems){  //product
    for(let item in cartItems[items]){  //size
      try {
        if(cartItems[items][item]>0){
        totalCount+=cartItems[items][item];
      }
      } catch (error) {
        
      }
      
    }
  }
  return totalCount;
}

const UpdateCartItem =(product_id  , size , quantity)=>{
    let cartItem = structuredClone(cartItems);
    cartItem[product_id][size] = quantity;
    setCartItems(cartItem); 
}

    const values = {
        currency , deliveryFees , products , showSearch , setShowSearch , search,setSearch ,cartItems , addItem ,getCartCount ,UpdateCartItem , totalAmount , setTotalAmount,navigate ,backendUrl , token , setToken
    }

    useEffect(()=>{
      console.log(cartItems);
    },[cartItems]);

  return (
    <ShopContext.Provider value={values}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContext