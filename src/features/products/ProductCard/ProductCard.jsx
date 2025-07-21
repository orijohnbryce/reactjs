import React from 'react'
import "./ProductCard.css"

const ProductCard = ({children}) => {
  return (
    <div className='product-card-container'>
        {children}
    </div>
  )
}

export default ProductCard
