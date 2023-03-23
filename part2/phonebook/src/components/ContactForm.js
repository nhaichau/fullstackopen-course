const ContactForm = (props) => {
    return (
        <form>
            <div>
                name: <input value={props.newName} onChange={props.handleInputName} />
            </div>
            <div>
                number: <input value={props.newNumber} onChange={props.handleInputNumber} />
            </div>
            <div>
                <button type="submit" onClick={props.addContact}>add</button>
            </div>
      </form>
    )
}

export default ContactForm
