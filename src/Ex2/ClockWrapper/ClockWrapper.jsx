import React, { useState } from 'react'
import Clock from '../Clock/Clock';
import ClassComp from '../../ClassComp/ClassComp';

const ClockWrapper = () => {
    const [showClock, setShowClock] = useState(false);

    console.log("wrapper");

    return (
        <div>

            {/* conditionally display the <Clock> based on showClock */}
            <button onClick={
                () => {
                    // setShowClock(!showClock)
                    setShowClock((prev)=>!prev)
                }
            }> {!showClock ? "Show Clock" : "Hide clock"} </button>
            {/* {showClock && <Clock />} */}
            {showClock && <ClassComp/>}

        </div>
    )
}

export default ClockWrapper