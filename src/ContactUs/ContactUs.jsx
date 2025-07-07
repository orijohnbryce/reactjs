import React, { useState } from 'react'
import "./ContactUs.css"

const ContactUs = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [content, setContent] = useState("");

    const [errorMsg, setErrorMsg] = useState("")

    const handleSend = () => {

        if (phone.length === 0) {
            setErrorMsg(prev => prev + " Phone field is required. ")
            return;
        }
        if (fname.length < 3) {
            setErrorMsg(prev => prev + " first name must be at least 3 chars")
            return;
        }       
        alert("Form sent")
    }
    return (
        <div className='contact-us-container'>
            <h1> ContactUs </h1>
            {errorMsg.length > 0 && <p className='error-msg'> {errorMsg} </p>}
            <input value={fname} placeholder='first name' onChange={(e) => { setFname(e.target.value) }} />
            <input value={lname} placeholder='last name' onChange={(e) => { setLname(e.target.value) }} />
            <input value={email} type='email' placeholder='email' onChange={(e) => { setEmail(e.target.value) }} />
            <input value={phone}  placeholder='phone' onChange={(e) => { setPhone(e.target.value) }} />
            <textarea value={content} placeholder='content' onChange={(e) => { setContent(e.target.value) }} />

            <button onClick={handleSend}> Send </button>
        </div>
    )
}

export default ContactUs