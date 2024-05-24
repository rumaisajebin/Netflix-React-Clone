import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Navbar() {
  const {user,logout}=UserAuth()
  const navigate=useNavigate()
  const handleLogout=async()=>{
    try{
      await logout();
      navigate('/')    }
      catch(error){
        console.log(error)
      }
      }
 


  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>

      {user?.email? <div>
        <Link to = '/account'>
        <button className='text-white font-semibold pr-4'> Account</button>
        </Link>
        <Link to= './'>
        <button onClick={handleLogout} className='bg-red-600 font-semibold px-6 py-2 rounded cursor-pointer'>Logout</button>
        </Link>
      </div>:
      <div>
      <Link to = '/login'>
      <button className='text-white font-semibold pr-4'>Sign In</button>
      </Link>
      <Link to= './signup'>
      <button className='bg-red-600 font-semibold px-6 py-2 rounded cursor-pointer'>Sign Up</button>
      </Link>
    </div>
      }
      

    </div>
  )
}

export default Navbar