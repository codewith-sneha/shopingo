import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {
  const [userState, setUserState] = useState('login');
  const {backendUrl , token , setToken  , navigate} = useContext(ShopContext);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const submitHandler=async(e)=>{
   try {
     e.preventDefault();
     if(userState == 'login'){
      const response  =await axios.post(`${backendUrl}api/user/login`,{email , password});
      console.log('response ',response)
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem('token',response.data.token);
        toast.success(response.data.message || 'Login successful')
      }else{
        toast.error(response.data.message)
      }
     }else{
       const response  =await axios.post(`${backendUrl}api/user/register`,{name , email , password});
       console.log(response)
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem('token',response.data.token);
        toast.success(response.data.message || 'Registered successfully')
      }else{
        toast.error(response.data.message)
      }
     }

   } catch (error) {
         toast.error(error.message)
   }
  }

  useEffect(()=>{
    if(token){
      navigate('/');
    }
  },[token])

   useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/');
    }
  },)

  return (
    <div className='flex justify-center items-center'>
          <form onSubmit={submitHandler} className='flex items-center p-4 py-8 bg-gray-100 rounded-lg flex-col gap-5 mt-20 w-[90%] sm:max-w-100' >
                <div className='flex gap-3 items-center mb-4'>
                  <p className='text-3xl text-gray-700 capitalize font-bold'>{userState}</p>
                  <hr className='border-none bg-gray-500 w-8 h-1' />
                </div>
                {userState=='login'?"":<input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' className='p-2 border px-4 border-gray-400 w-full rounded-lg' required/>}
                <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='p-2 border px-4 border-gray-400 w-full rounded-lg' required/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='p-2 border px-4 border-gray-400 w-full rounded-lg'required />
                <div className='flex justify-between w-full text-gray-600'>
                  <p className='text-xs sm:text-base'>forget password</p>
                  {userState=='login'?
                  <p onClick={()=>setUserState("sign up")} className='text-xs sm:text-base cursor-pointer'>create account</p>:
                  <p onClick={()=>setUserState("login")} className='text-xs sm:text-base cursor-pointer'>login</p>
                  }
                  
                </div>
                <button type='submit' className='w-[80%] rounded-lg p-2 bg-green-800 text-white text-lg'>{userState}</button>
          </form>
    </div>
  )
}

export default Login