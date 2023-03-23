import { useState } from 'react'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [shownPersons, setShownPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleInputName = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }
  
  const handleInputNumber = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()

    if (persons.length === 0) {
      console.log(persons)
      const newNameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newNameObject))
      setShownPersons(shownPersons.concat(newNameObject))
      setNewName('')
      setNewNumber('')
    } else {
      console.log(persons)
      let existingPerson = persons.find(person => {
        return newName.toLowerCase() === person.name.toLocaleLowerCase()
      })
      
      if (existingPerson) {
        alert (`${newName} already exists in the phonebook`)
        setNewName('')
        setNewNumber('')
      } else {
        const newNameObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
        }
        setPersons(persons.concat(newNameObject))
        setShownPersons(shownPersons.concat(newNameObject))
        setNewName('')
        setNewNumber('')
      }
      
      
    }
      
  }
    

  const handleFilter = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
    
    if (event.target.value) {
      const filterredPersons = persons.filter(person => {
        return person.name.toLowerCase().search(event.target.value.toLowerCase()) > -1
      })
      
      console.log(filterredPersons)
  
      setShownPersons(filterredPersons)
    } else {
      setShownPersons(persons)
    }
    


  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm 
        newName={newName} 
        newNumber={newNumber} 
        handleInputName={handleInputName} 
        handleInputNumber={handleInputNumber}
        addContact={addContact} 
      />
      {/* <form>
        <div>
          name: <input value={newName} onChange={handleInputName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleInputNumber} />
        </div>
        <div>
          <button type="submit" onClick={addContact}>add</button>
        </div>
      </form> */}
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      {/* <div>
        Filter contact name with: <input value={filter} onChange={handleFilter} />
      </div> */}
      <Persons shownPersons={shownPersons} />
      {/* <ul> 
        {shownPersons.map(person => 
          (!shownPersons.length ? ''
          :
          <li key={person.id}>{person.name} {person.number}</li>
          )
        )}
        
      </ul> */}
    </div>
  )
}

export default App