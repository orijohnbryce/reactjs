import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../features/auth/Login/Login'
import Register from '../features/auth/Register/Register'
import Home from '../features/home/Home'
import ProductsPage from '../features/products/ProductsPage/ProductsPage'
import SingleProduct from '../features/products/SingleProduct/SingleProduct'
import CartPage from '../features/cart/CartPage/CartPage'

const SiteRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />        
        <Route path='/home' element={<Home/>} />        
        <Route path='/cart' element={<CartPage/>} />        
        <Route path='/' element={<Home/>} />        
        <Route path='/products' element={<ProductsPage/>} />        
        <Route path='/product/:id' element={<SingleProduct/>} />        
        <Route path='*' element={<p> Route Not Found  </p>} />        
    </Routes>
  )
}

export default SiteRoutes