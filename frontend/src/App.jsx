import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Signup /> }/>
        <Route path="/signup" element={ <Signup /> }/>
        <Route path="/login" element={ <Login /> }/>
      </Routes>
    </>
  )
}

export default App
