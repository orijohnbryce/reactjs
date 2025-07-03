import React, { useState } from 'react'
import Clock from '../Clock/Clock';

const ClockWrapper = () => {
    const [showClock, setShowClock] = useState(false);

    console.log("wrapper");
    
    return (
        <div>

            <Clock/>
            {/* conditionally display the <Clock> based on showClock */}

        </div>
    )
}

export default ClockWrapper