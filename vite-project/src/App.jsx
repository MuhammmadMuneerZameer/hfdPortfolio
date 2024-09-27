import { useState } from 'react'

import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home , Aboutus , Contactus , Portfolio , Login , SignUp} from './Components/pages'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Aboutus' element={<Aboutus/>}/>
        <Route path='Contactus' element={<Contactus/>}/>
        <Route path='Portfolio' element={<Portfolio/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
