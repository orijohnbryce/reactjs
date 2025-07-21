import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../productsApi'
import SingleProduct from '../SingleProduct/SingleProduct'
import "./ProductsPage.css"
import { useNavigate } from 'react-router-dom'

const ProductsPage = ({ cart, setCart }) => {
    const [products, setProducts] = useState([])
    const nav = useNavigate();

    const addProductToCart = (product) => {
        const cartCopy = [...cart]
        // check if already exists
        const exists = cart.filter((p) => p.data.id === product.id)[0];
        if (exists) {
            // update amount
            exists.amount += 1;
        } else {
            // push
            cartCopy.push({ data: product, amount: 1 });
        }
        setCart(cartCopy);
    }

    const removeProductFromCart = (product) => {
        let cartCopy = [...cart]
        // check if already exists
        const exists = cart.filter((p) => p.data.id === product.id)[0];

        if (exists) {
            // update amount
            exists.amount -= 1;
            if (exists.amount === 0) {
                cartCopy = cart.filter((p) => p.data.id !== product.id);
            }
            setCart(cartCopy);
        }
    }

    const getAmountInCart = (id) => {
        const pInCart = cart.filter((p) => p.data.id === id)[0];

        if (pInCart)
            return pInCart.amount;
        else
            return 0;
    }
    useEffect(() => {
        fetchProducts().then((products_) => {
            setProducts(products_)
        })
    }, [])
    return (
        <div>
            {products?.map((p) => {
                return <div key={p.id} className='p-row'>
                    <p onClick={() => { nav("/product/" + p.id) }}> {p.id} - {p.name} </p>

                    <div>
                        <button onClick={() => addProductToCart(p)}> + </button>
                        <span> {getAmountInCart(p.id)}</span>
                        {getAmountInCart(p.id)!==0 && <button onClick={() => removeProductFromCart(p)}> - </button>}
                    </div>
                </div>
            })}
        </div>
    )
}

export default ProductsPage