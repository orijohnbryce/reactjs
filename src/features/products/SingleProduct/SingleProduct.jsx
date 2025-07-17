import React, { useEffect, useState } from 'react'
import "./SingleProduct.css"
import { useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../productsApi'

const SingleProduct = () => {
    const [product, setProduct] = useState()
    const params = useParams()

    useEffect(() => {
        fetchSingleProduct(params.id).then((p) => {
            setProduct(p)
        })
    }, [])

    if (!product){
        return <p> loading .. </p>
    }
    return (
        <div className='single-product-container'>
            <h3> {product.name} </h3>
            <p> price: {product.price} </p>
            <p> stock: {product.stock} </p>
            <img src={product.imageUrl} />
        </div>
    )
}

export default SingleProduct