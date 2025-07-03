import React, { useState } from 'react'

const Ex3 = () => {
    const [myList, setMyList] = useState(["a", "b","david"])    
    const [rerender, setRerender] = useState(true)

    const deleteFirst = () => {
        myList.shift()        
        // now the first element of the list is removed.

        // just for rerendering:
        // setRerender(!rerender)

        console.log(myList);
        setMyList([...myList]);
    }

    return (
        <>
            <div> First number in the list is: {myList[0]}</div>
            <button onClick={deleteFirst}> Delete First </button>
        </>
    )
}

export default Ex3