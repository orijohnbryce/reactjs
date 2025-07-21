import React, { useContext, useEffect, useState } from 'react'
import { fetchProducts } from '../productsApi'
import SingleProduct from '../SingleProduct/SingleProduct'
import "./ProductsPage.css"
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../App'
import { addProductToCart } from '../productsHelpers'
import ProductCard from '../ProductCard/ProductCard'

const ProductsPage = () => {
    const nav = useNavigate();
    const { cart, setCart } = useContext(AppContext);
    const [products, setProducts] = useState([])

    // const addProductToCart = (product) => {
    //     const cartCopy = [...cart]
    //     // check if already exists
    //     const exists = cart.filter((p) => p.data.id === product.id)[0];
    //     if (exists) {
    //         // update amount
    //         exists.amount += 1;
    //     } else {
    //         // push
    //         cartCopy.push({ data: product, amount: 1 });
    //     }
    //     setCart(cartCopy);
    // }

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
                return <ProductCard>
                    <div key={p.id} className='p-row'>
                        <p onClick={() => { nav("/product/" + p.id) }}> {p.id} - {p.name} </p>
                        <div>
                            <img className='clickable' onClick={() => addProductToCart(p, cart, setCart)} style={{ width: "20px" }} src='data:image/png;base64,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' />
                            <span> {getAmountInCart(p.id)}</span>
                            {getAmountInCart(p.id) !== 0 &&
                                <img className='clickable' onClick={() => removeProductFromCart(p)} style={{ width: "20px" }} src='data:image/png;base64,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' />
                            }
                        </div>
                    </div>
                </ProductCard>
            })}
        </div>
    )
}

export default ProductsPage