const PersonCard = ({name, age}) => {
    console.log(name, age)
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