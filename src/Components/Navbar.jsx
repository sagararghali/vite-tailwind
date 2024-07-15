import React from 'react'

export default function Navbar(props) {
  return (<>
    <div className='bg-gray-500 rounded-lg flex justify-between'>
    <div className=' text-green-400 p-6  font-bold '>{props.title}</div>
    <ul className='flex space-x-4 mt-6 '>
        <li className='hover:text-red-400'>About</li>
        <li className='hover:text-red-400'>Home</li>
        <li className='hover:text-red-400'>Blogs</li>
        <li className='hover:text-red-400'>Contact</li>
        <li className='hover:text-red-400'>Login</li>
    </ul>
    </div>
    <p>hello everyone my name is sagar arghali magar.</p>
    </>
  )
}

