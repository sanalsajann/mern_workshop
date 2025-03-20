import { useState } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Login from "./components/Login";
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  )
}

export default App
