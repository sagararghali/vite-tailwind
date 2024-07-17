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
    <Navbar title="NavBar"/>
    <Router>
       <Routes>
          <Route path="/login.jsx" element={<Login/>}> </Route>
        </Routes>
    </Router>
</>
  )
}

export default App
