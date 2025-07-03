import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [currentTime, setCurrentTime] = useState();

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const temp = `${hours}:${minutes}:${seconds}`;

        console.log(temp);
        setCurrentTime(temp);
    }

    useEffect(() => {
        updateClock();
        const iid_ = setInterval(updateClock, 1000);
        return () => { clearInterval(iid_) }
    }, [])

    // updateClock()  // this is infinite loop


    return (
        <div>time is: {currentTime} </div>
    )
}

export default Clock