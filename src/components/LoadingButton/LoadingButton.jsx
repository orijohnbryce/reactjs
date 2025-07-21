import React, { useState } from 'react'
import './LoadingButton.css'

const LoadingButton = ({ onClick, loadingText, children }) => {

    const [loading, setLoading] = useState(false);
    
    const handleClick = async ()=>{
        setLoading(true);
        await onClick();

        // delay of 0.5 sec
        await new Promise((x)=>setTimeout(x, 500))

        setLoading(false)
    }
    return (
        <span
            className='clickable loading-btn-container'
            onClick={handleClick}
        >

            {/* {loading ?  loadingText || children : children}                         */}
            {loading ?  <div className='spinner'></div> : children}                        
        </span>
    )
}

export default LoadingButton