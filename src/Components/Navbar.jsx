import React from 'react'


export default function Navbar(props) {
  return (
  <>
    <div className='bg-gray-500 rounded-lg flex justify-between'>
    <div className=' text-green-400 p-6  font-bold '>{props.title}</div>

    <ul className='flex space-x-6 mt-6 mr-8 relative'>
        <a href="about.jsx"><li className='hover:text-red-400 '>About</li></a>
        <a href=""><li className='hover:text-red-400 '>Home</li></a>
        <a href=""><li className='hover:text-red-400 '>Blogs</li></a>
        <a href=""><li className='hover:text-red-400 '>Contact</li></a>
        <a href="login.jsx"><li className='hover:text-red-400 '>Login</li></a>
    </ul>
    </div>
    </>
  )
}

