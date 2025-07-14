import React, { useState } from 'react'
import { updateProduct } from '../../api';
import { useForm } from 'react-hook-form';

const UpdateProduct = ({ product, setEditMode }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: product.name,
            price: product.price,
            stock: product.stock,
        }
    });
    const [err, setErr] = useState("")

    const handleUpdateProduct = async (data) => {
        setErr("")
        try {

            const res = await updateProduct(product.id, data)
            setEditMode(false);

        } catch (error) {
            console.log(error);
            if (error.message === "Network Error") {
                setErr("השרת לא זמין כרגע")
            } else if (error.response?.data) {
                setErr(error.response.data)
            }
            else {
                setErr("אירעה שגיאה לא מתוכננת. נא נסה שנית מאוחר יותר או פנה לתמיכה")
            }
        }
    }
    return (
        <div>
            <h1> Update Product </h1>
            <form onSubmit={handleSubmit(handleUpdateProduct)}>
                <input {...register("name")} placeholder='product name' />
                <br />
                <input {...register("price")} type='number' placeholder='price' />
                <br />
                <input {...register("stock")} type='number' placeholder='stock' />
                <br />
                <button> Update Product </button>
            </form>
            {err && <p> {err}</p>}
        </div>
    )
}

export default UpdateProduct