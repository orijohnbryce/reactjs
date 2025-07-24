import React, { useContext, useEffect, useState } from 'react'
import "./SingleProduct.css"
import { useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../productsApi'
import { AppContext } from '../../../App'
import { useSelector } from 'react-redux'
import { selectDarkmode } from '../../../app/redux/darkmodeSelectors'

const SingleProduct = () => {
    const [product, setProduct] = useState()
    const params = useParams()

    const isDark = useSelector(selectDarkmode);

    const {cart, setCart} = useContext(AppContext);

    useEffect(() => {
        fetchSingleProduct(params.id).then((p) => {
            setProduct(p)
        })
    }, [])

    if (!product){
        return <p> loading .. </p>
    }
    return (
        <div className={isDark ? 'single-product-container dark' : 'single-product-container'}>
            <h3> {product.name} </h3>
            <p> price: {product.price} </p>
            <p> stock: {product.stock} </p>
            <img src={product.imageUrl} />
        </div>
    )
}

export default SingleProduct