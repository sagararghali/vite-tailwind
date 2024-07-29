import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About.jsx';
import Login from './Components/Login.jsx';
import Contact from './Components/Contact.jsx';
import Blogs from './Components/Blogs.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <Router>
   <Routes>
    <Route path="/" element={<App />} />
      <Route path="/aboutpage" element={<About/>} />
      <Route path="/loginpage" element={<Login/>} />
      {/* <Route path="/homepage" element={</>} />*/}
      <Route path="/blogspage" element={<Blogs/>} />
      <Route path="/contactpage" element={<Contact/>} /> 
  </Routes>
 </Router>
 </>
)

