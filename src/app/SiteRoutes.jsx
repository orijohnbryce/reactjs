import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../features/auth/Login/Login'
import Register from '../features/auth/Register/Register'
import Home from '../features/home/Home'
import ProductsPage from '../features/products/ProductsPage/ProductsPage'
import SingleProduct from '../features/products/SingleProduct/SingleProduct'

const SiteRoutes = ({onSuccess, isLogged, cart, setCart}) => {
  return (
    <Routes>
        <Route path='/login' element={<Login onSuccess={onSuccess}/>}/>
        <Route path='/register' element={<Register onSuccess={onSuccess}/>} />        
        <Route path='/home' element={<Home/>} />        
        <Route path='/' element={<Home/>} />        
        {isLogged && <Route path='/products' element={<ProductsPage cart={cart} setCart={setCart}/>} />}
        {!isLogged && <Route path='/products' element={<p>You must be logged it to see products</p>} />}
        <Route path='/product/:id' element={<SingleProduct/>} />        
        <Route path='*' element={<p> Route Not Found  </p>} />        
    </Routes>
  )
}

export default SiteRoutes