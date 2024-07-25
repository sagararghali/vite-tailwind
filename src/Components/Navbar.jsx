import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
  <>
    <div className='bg-gray-500 rounded-lg flex justify-between'>
    <div className=" text-green-400 p-6  font-bold ">{props.title}</div>
    <ul className='flex space-x-6 mt-6 mr-8 relative'>
        <Link to="/aboutpage"><li className='hover:text-red-400 '>About</li></Link>
       <Link to="homepage"> <li className='hover:text-red-400 '>Home</li></Link>
        <Link to="blogspage"><li className='hover:text-red-400 '>Blogs</li></Link>
       <Link to="contactpage"> <li className='hover:text-red-400 '>Contact</li></Link>
       <Link to="loginpage"> <li className='hover:text-red-400 '>Login</li></Link>
    </ul>
    </div>
    </>
  )
}

