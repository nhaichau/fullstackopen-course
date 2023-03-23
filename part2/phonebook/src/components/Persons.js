const Persons = (props) => {
    return (
        <ul> 
            {props.shownPersons.map(person => 
                (!props.shownPersons.length ? ''
                :
                <li key={person.id}>{person.name} {person.number}</li>
                )
            )}
        
      </ul>
    )
}

export default Persons