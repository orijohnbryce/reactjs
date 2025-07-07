import React, { useState } from 'react'

const FormWithObject = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        // handle submit code ... 
        alert("sent")

        // e.target.reset() // Will not work!
        
        // reset fields
        setFormData({
            name: "",
            email: "",
            phone: "",
        })
    }

    //// better use generic method if possible. implemented here later
    // const handleNameChange = (e) => {
    //     setFormData({ ...formData, name: e.target.value })
    // }
    // const handleEmailChange = (e) => {
    //     setFormData({ ...formData, email: e.target.value })
    // }

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' value={formData.name} placeholder='name..' onChange={handleChange} />
                <input name='email' type='email' value={formData.email} placeholder='email..' onChange={handleChange} />
                <input name='phone' value={formData.phone} placeholder='phone..' onChange={handleChange} />
                
                <button> SEND  </button>
            </form>

        </div>
    )
}

export default FormWithObject