import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../features/auth/Login/Login'
import Register from '../features/auth/Register/Register'
import Home from '../features/home/Home'
import ProductsPage from '../features/products/ProductsPage/ProductsPage'
import SingleProduct from '../features/products/SingleProduct/SingleProduct'

const SiteRoutes = ({onSuccess, isLogged}) => {
  return (
    <Routes>
        <Route path='/login' element={<Login onSuccess={onSuccess}/>}/>
        <Route path='/register' element={<Register onSuccess={onSuccess}/>} />        
        <Route path='/home' element={<Home/>} />        
        {isLogged && <Route path='/products' element={<ProductsPage/>} />}
        {!isLogged && <Route path='/products' element={<Login/>} />}
        <Route path='/product/:id' element={<SingleProduct/>} />        
        <Route path='*' element={<p> Route Not Found  </p>} />        
    </Routes>
  )
}

export default SiteRoutes