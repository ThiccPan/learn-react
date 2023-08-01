// eslint-disable-next-line react/prop-types
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState({
        count1: 0,
        count2: 0
    })

    const handleLeft = () => {
        setCount({
            ...count,
            count1: count.count1 + 1,
        });
    }

    const handleRight = () => {
        setCount({
            ...count,
            count2: count.count2 + 1
        });
    }

    return (
        <>
            <div>{count.count1}</div>
            <div>{count.count2}</div>
            <button onClick={handleLeft}>+ 1 to left</button>
            <button onClick={handleRight}>+ 1 to left</button>
        </>
    )
}

export default Counter;