import { useState } from 'react'
import RoundList from '../RoundList/RoundList';
import "./Stopper.css"

const Stopper = () => {

    const [iid, setIid] = useState(null);
    const [curValue, setCurValue] = useState(0); // real-time updated value
    const [lastRoundTime, setLastRoundTime] = useState(0);
    const [rounds, setRounds] = useState([]);

    const handleStart = () => {
        const iid_ = setInterval(
            () => {
                // setCurValue(curValue + 1)  // not good!
                setCurValue(prev => prev + 1);
            }, 100)

        setIid(iid_)
    }

    const handleRound = () => {
        const newRound = curValue - lastRoundTime;

        //// not good practice!!
        // rounds.push(newRound);
        // setRounds(rounds)

        setRounds([...rounds, newRound]);
        setLastRoundTime(curValue);
    }

    const handleStop = () => {
        clearInterval(iid);
        setIid(null);
        setRounds([])
        setLastRoundTime(0)
        setCurValue(0)
    }

    const totalSeconds = Math.floor(curValue / 10);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);

    // format output: "01" instead of "1"
    const pad = (n) => n.toString().padStart(2, '0');

    // this could be higher in the comp. but for clean code its here.
    if (!iid)
        return <button className='start-btn' onClick={handleStart}> Start </button>

    return (
        <div className='stopper-container'>
            <h2> {curValue} </h2>
            <h2> {pad(hours)}:{pad(minutes)}:{pad(seconds)} </h2>
            <button className='round-btn' onClick={handleRound}> Round</button>
            <button onClick={handleStop}> Stop </button>
            <RoundList rounds={rounds} />
        </div>
    )
}

export default Stopper