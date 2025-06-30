import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [num, setNum] = useState(0)

    console.log("Effect is rendering");
    
    useEffect(
        () => {
            console.log("UseEffect is running");
        }, []
    )

    return (
        <div onClick={()=>{setNum(num+1)}}>Effect {num}</div>
    )
}

export default Effect