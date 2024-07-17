import React from 'react'

export default function Login() {
  return (

<>
<div className=' bg-cover bg-center m-4 rounded' style={{ backgroundImage: "url('img3.jpeg')" }}>
    <div className='grid justify-center p-20 space-y-8 '>
       
       <h1 className='text-white text-center font-bold'>Login page</h1>
        <div>
        <label className='font-bold text-white' htmlFor="">Email Adress :</label><br />
<input className='bg-gray-200 rounded-lg' type="Email"  placeholder=" enter your email"/>
       </div>
<div>
<label className='font-bold text-white' htmlFor=""> Password :</label><br />
<input className='bg-gray-200 rounded-lg' type="password" placeholder=" enter your password"/>
</div>
<button className='bg-green-300 m-16 rounded' > Login</button>
            </div>
            </div>
</>

)
}
