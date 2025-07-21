import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import "./CartPage.css"

const CartPage = () => {

    const {cart, setCart} = useContext(AppContext);
  return (
    <div>
        {cart.map((p)=><div id='cart-page-single-product-container'>
            <span>{p.data.name}</span>
            <span>{p.amount}</span>            
        </div>)}
    </div>
  )
}

export default CartPage