const PersonCard = (props) => {
    console.log(props)
    return (
        <div>
            <p>Name: <span>{props.name}</span></p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default PersonCard