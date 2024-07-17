import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    

       <Routes>
       <Route path="/" element={<Navbar title="NavBar"/>}> </Route>
          <Route path="/login.jsx" element={<Login/>}> </Route>
        </Routes>
    </Router>
</>
  )
}

export default App
