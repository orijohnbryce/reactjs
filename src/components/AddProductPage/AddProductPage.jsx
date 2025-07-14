import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { addProduct } from '../../api';

const AddProductPage = ({ setWhatToShow }) => {
    const { register, handleSubmit } = useForm();
    const [err, setErr] = useState("")

    const handleAddProduct = async (data) => {
        setErr("")
        try {
            const res = await addProduct(data)
            setWhatToShow("home")
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
            <h1> Add new Product </h1>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <input {...register("name")} required placeholder='product name' />
                <br />
                <input {...register("price")} required type='number' placeholder='price' />
                <br />
                <input {...register("stock")} required type='number' placeholder='stock' />
                <br />
                <button> Add Product </button>
            </form>
            {err && <p> {err}</p>}
        </div>
    )
}

export default AddProductPage