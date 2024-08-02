import React from 'react'
import Navbar from './Components/Navbar'
import Homebody from './Components/Homebody';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
    <div className="min-h-screen  bg-cover bg-center bg-[url('images.jpeg')] ">
    <Navbar title="Comic World"/>
<Homebody/>
    </div>
    </>
  )
}

