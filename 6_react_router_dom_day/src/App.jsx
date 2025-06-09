import React from 'react'
import Navbar from "./Comps/Navbar/Navbar"
import { Route, Router, Routes } from 'react-router-dom'
import About from './Comps/About/About'
import Contact from './Comps/Contact/Contact'
import Services from './Comps/Services/Services'


const App=() =>{
  return(
    
    <div>
      
      <Navbar></Navbar>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
      </div>
  )
}

export default App

