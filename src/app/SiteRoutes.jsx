import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../features/auth/Login/Login'
import Register from '../features/auth/Register/Register'
import Home from '../features/home/Home'

const SiteRoutes = ({onSuccess}) => {
  return (
    <Routes>
        <Route path='/login' element={<Login onSuccess={onSuccess}/>}/>
        <Route path='/register' element={<Register onSuccess={onSuccess}/>} />        
        <Route path='/home' element={<Home/>} />        
        <Route path='*' element={<p> Route Not Found  </p>} />        
    </Routes>
  )
}

export default SiteRoutes