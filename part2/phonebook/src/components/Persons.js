const Persons = (props) => {
    return (
        <ul> 
            {props.shownPersons.map(person => 
                (!props.shownPersons.length ? ''
                :
                <li key={person.id} className='person'>
                        {person.name}
                        &nbsp; 
                        {person.number}
                        &nbsp;
                        <button onClick={() => props.deleteContact(person)}>delete</button> 
                </li>
                )
            )}
        
      </ul>
    )
}

export default Persons