// eslint-disable-next-line react/prop-types
const Counter = ({ count, setCounter }) => {
    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCounter(count+1)}>+</button>
            <button onClick={() => setCounter(count-1)}>-</button>
        </>
    )
}

export default Counter;