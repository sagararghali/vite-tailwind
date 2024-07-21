import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import About from './Components/About'
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
    <Home/>
       <Routes>
          <Route path="/login.jsx" element={<Login/>}> </Route>
          <Route path="/about.jsx" element={<About/>}> </Route>
        </Routes>
    </Router>
</>
  )
}

export default App
