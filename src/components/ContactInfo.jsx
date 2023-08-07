// import contact from "../contact";

function ContactInfo({contactData, onDelete}) {
    return (<>
        <p>name: {contactData.name}</p>
        <p>number: {contactData.number}</p>
        <button onClick={() => onDelete(contactData.name)}>delete</button>
        <hr />
    </>)
}

export default ContactInfo