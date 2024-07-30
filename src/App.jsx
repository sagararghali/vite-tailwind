import React from 'react'
import Navbar from './Components/Navbar'
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
    <div className="min-h-screen  bg-cover bg-center  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-[url('images.jpeg')] ">
    <Navbar title="Comic World"/>
    </div>
    </>
  )
}

