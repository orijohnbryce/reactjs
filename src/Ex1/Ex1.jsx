import React, { useEffect, useState } from 'react'

const Ex1 = () => {
    const [num, setNum] = useState(0);
    const [minutesCounter, setMinutesCounter] = useState(0)

    const [iid, setIid] = useState();

    // console.log(iid);

    //// first way to update minutes
    // if (num === 5) {
    //     setMinutesCounter(minutesCounter + 1) // best practice is using prev=> prev+1
    //     setNum(0);
    // }

    // better way to update minutes:
    useEffect(
        () => {
            if (num === 5) {
                setMinutesCounter(minutesCounter + 1) // best practice is using prev=> prev+1
                setNum(0);
            }
        }, [num])

    useEffect(() => {

        // setNum(num+1);
        const iid = setInterval(() => {
            // console.log("shalom");
            // console.log(num); // always will show 0

            // setNum(num + 1 ) // will not work as expected
            setNum(prevNum => prevNum + 1)

        }, 1000);
        setIid(iid);
    }, [])

    return (
        <div>
            <p> minutes is: {num}</p>
            <p> minutes counter (5): {minutesCounter}</p>

            {iid && <button onClick={() => { clearInterval(iid); setIid(null) }}> Stop interval  </button>}
        </div>
    )
}

export default Ex1
