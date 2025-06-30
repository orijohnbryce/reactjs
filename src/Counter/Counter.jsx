import React from 'react'
import ImageSwapper from '../ImageSwapper/ImageSwapper'

const Counter = () => {

    console.log("Counter rendered!");
    const [count, setCount] = React.useState(0)
    return (
        <>
            <button onClick={() => { setCount(count + 1) }}> + </button>
            <div>Counter: {count} </div>
            <button onClick={() => { setCount(count - 1) }}> - </button>

            {count !== 3 && <ImageSwapper num={count} setCount={setCount} />}
        </>

    )
}

export default Counter