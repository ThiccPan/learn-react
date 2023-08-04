import contact from "../contact";

function ContactInfo({contactData}) {
    return (<>
        <p>name: {contactData.name}</p>
        <p>number: {contactData.number}</p>
        <hr />
    </>)
}

export default ContactInfo