import React, { useEffect, useState } from 'react'

const Stam = () => {
    const [stam, setStam] = useState(0);

    useEffect(() => {
        console.log(stam);
    }, [stam])

    const handleclick = () => {

        setStam(stam + 1)
        // console.log(stam);  // this will show the old value
    }
    return (
        <div>
            {stam}
            <br />
            <button onClick={handleclick}> click </button>
        </div>
    )
}

export default Stam