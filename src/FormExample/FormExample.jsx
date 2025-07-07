import { useState } from "react"


const FormExample = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(name, email);
        alert("sent")        
        setName("")
        setEmail("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" required placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input type="email" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                <button type="submit"> Send </button>
            </form>

        </div>
    )
}

export default FormExample