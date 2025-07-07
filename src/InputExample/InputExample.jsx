import { useState } from 'react'

const InputExample = () => {

    const [inputValue, setInputValue] = useState("")

    console.log(`InputExample rendered with inputValue = ${inputValue}`);
    
    const handleChange = (event)=>{
        setInputValue(event.target.value)
    }

    return (
        <div>

            <input value={inputValue} onChange={handleChange}/>
        </div>
    )
}

export default InputExample