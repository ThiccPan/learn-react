import { useState } from "react"

function ArrayState() {
    const [arrVal, setArr] = useState([])
    
    function setLeftArr() {
        setArr([...arrVal, 'L'])
    }

    function setRightArr() {
        setArr([...arrVal, 'R'])
    }
    return (
        <>
            <button onClick={setLeftArr}>+ L</button>
            <p>{arrVal.join('->')}</p>
            <button onClick={setRightArr}>+ R</button>
        </>
    )
}

export default ArrayState