const PersonCard = (props) => {
    console.log(props)
    const {name, age} = props;
    const greetingMsg = () => `hello ${name}`
    return (
        <div>
            <p>Name: <span>{name}</span></p>
            <p>Age: {age}</p>
            <p>{greetingMsg()}</p>
        </div>
    )
}

export default PersonCard