import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
export default function Navbar(props) {
  return (
  <>
    <div className='bg-gray-500 bg-opacity-90 rounded-lg flex justify-between'>
    <div className=" text-green-400 p-6  font-bold text-2xl ">{props.title}</div>
    <div className='flex '>
    <ul className='text-orange-200  space-x-6 mt-6 mr-8 relative hidden md:flex'>
       <Link to="homepage"> <li className='hover:text-red-400  hover:underline text-lg'>Home</li></Link>
        <Link to="/aboutpage"><li className='hover:text-red-400 hover:underline  text-lg'>About</li></Link>
        <Link to="blogspage"><li className='hover:text-red-400 hover:underline text-lg'>Blogs</li></Link>
       <Link to="contactpage"> <li className='hover:text-red-400 hover:underline text-lg'>Contact</li></Link>
       <Link to="loginpage"> <li className='hover:text-red-400 hover:underline text-lg'>Login</li></Link>
    </ul>
    <div className=' md:hidden mt-3 ml-0'>
    <Sidebar/>
    </div>
    </div>
    
   
    </div>
    </>
  )
}

