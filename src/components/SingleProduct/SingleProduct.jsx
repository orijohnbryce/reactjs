import React, { useState } from 'react'
import UpdateProduct from '../UpdateProduct/UpdateProduct';

const SingleProduct = ({ product, onBackToList }) => {
    const [editMode, setEditMode] = useState(false);

    if (editMode){
        return <div>
           <UpdateProduct product={product} setEditMode={setEditMode}/>
        </div>
    }
    return (
        <div>
            <button onClick={onBackToList}> Back to list </button>
            <h2> {product.name} </h2>
            <p>id: {product.id}</p>
            <p>price: {product.price}</p>
            <p>in stock: {product.stock}</p>
            <img src={product.imageUrl} alt='product image'/>            
            <br/>
            <button onClick={()=>{setEditMode(true)}}> Edit product </button>
        </div>
    )
}

export default SingleProduct