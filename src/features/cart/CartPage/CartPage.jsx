import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import "./CartPage.css"
import ProductCard from '../../products/ProductCard/ProductCard';

const CartPage = () => {

    const { cart, setCart } = useContext(AppContext);
    return (
        <div>
            {cart.map((p) => <ProductCard> <div id='cart-page-single-product-container'>
                <span>{p.data.name}</span>
                <span>{p.amount}</span>
            </div>
            </ProductCard>
            )}
        </div>
    )
}

export default CartPage