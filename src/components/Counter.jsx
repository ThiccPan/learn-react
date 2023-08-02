// eslint-disable-next-line react/prop-types
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState({
        count1: 0,
        count2: 0
    })

    const [total, setTotal] = useState(0)
    const updated = 1
    const handleLeft = () => {
        setCount({
            ...count,
            count1: count.count1 + updated,
        });

        setTotal(total + updated)
    }

    const handleRight = () => {
        const updated = 1
        setCount({
            ...count,
            count2: count.count2 + updated
        });

        setTotal(total + updated)
    }

    return (
        <>
            <div>{count.count1}</div>
            <div>{count.count2}</div>
            <hr />
            <div>total: {total}</div>
            <button onClick={handleLeft}>+ 1 to left</button>
            <button onClick={handleRight}>+ 1 to left</button>
        </>
    )
}

export default Counter;