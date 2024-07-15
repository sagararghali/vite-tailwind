import React from 'react'

export default function Navbar(props) {
  return (<>
    <div className='bg-gray-500 rounded-lg flex justify-between'>
    <div className=' text-green-400 p-6  font-bold '>{props.title}</div>
    <ul className='flex justify-between'>
        <li>Home</li>
        <li>About</li>
        <li>Blogs</li>
        <li>Contact</li>
        <li>Login</li>
    </ul>
    </div>
    </>
  )
}
