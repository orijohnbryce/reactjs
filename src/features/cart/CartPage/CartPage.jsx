import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import "./CartPage.css"
import ProductCard from '../../products/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../app/redux/cartSelectors';

const CartPage = () => {

    // const { cart } = useContext(AppContext);
    const cart = useSelector(selectCart);

    return (
        <div>
            {cart.map((p) => 
            <ProductCard key={p.id}>
                <div id='cart-page-single-product-container'>
                    <span>{p.data.name}</span>
                    <span>{p.amount}</span>
                </div>
            </ProductCard>
            )}
        </div>
    )
}

export default CartPage