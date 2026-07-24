import React, { useContext, useState } from 'react'
import axios from 'axios';
import { AdminContext } from '../context/AdminContext';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setToken , backendUrl} = useContext(AdminContext);
    const HandleLogin = async (e)=>{
        try {
            e.preventDefault();
            const response = await axios.post(`${backendUrl}api/user/admin`,{email,password});
            if(response.data.success){
                setToken(response.data.token);
                toast.success(response.data.message)
            }
            else{
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <div className='flex h-screen bg-gray-100 justify-center items-center'>
        <div className='max-w-md p-4 py-10 gap-4 bg-white flex flex-col'>
            <p className='text-center text-2xl capitalize'>admin login</p>
            <form onSubmit={HandleLogin} className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1  text-xl '>
                    <p className='text-blue-900'>Enter your email : </p>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className='p-1 border' type="text" placeholder='Eg. name@gmail.com' />
                </div>
                <div className='flex flex-col gap-1  text-xl '>
                    <p className='text-blue-900'>Enter your email : </p>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className='p-1 border' type="password" placeholder='Eg. hugd#$%' />
                </div>
                <button type='submit' className='capitalize text-2xl text-center w-full bg-green-700 text-white p-2 hover:bg-green-800'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login