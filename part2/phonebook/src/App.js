import { useState } from 'react'
import { useEffect } from 'react'
import personService from './services/personService'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [shownPersons, setShownPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [contactEventMessage, setContactEventMessage] = useState(null)

  useEffect(() => {
    personService
      .getAllPersons()
      .then(response => {
        console.log(response)
        setPersons(response.data)
        setShownPersons(response.data)
      })
  }, [])

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
      const newPerson = {
        name: newName,
        number: newNumber,
        id: (persons.length + 100)
      }
      
      personService
        .createPerson(newPerson)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(response.data))
          setShownPersons(shownPersons.concat(response.data))
          
        })
      setContactEventMessage(`Added ${newPerson.name}`)
      setTimeout(() => {
        setContactEventMessage(null)
      }, 5000)
      setNewName('')
      setNewNumber('')
    } else {
      console.log(persons)
      let existingPerson = persons.find(person => {
        return newName.toLowerCase() === person.name.toLocaleLowerCase()
      })
      
      if (existingPerson) {
        const overwriteContact = window.confirm(`${newName} already exists in the phonebook, replace number?`)
        if (overwriteContact) {
          const newPerson = {
            name: newName,
            number: newNumber,
            id: existingPerson.id
          }
          personService.updatePerson(newPerson)
            .then(() => personService.getAllPersons()
            .then(response => {
              setPersons(response.data)
              setShownPersons(response.data)
            }))
        }
        setNewName('')
        setNewNumber('')
      } else {
        const newPerson = {
          name: newName,
          number: newNumber,
          id: persons.length + 100
        }
        personService
        .createPerson(newPerson)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(response.data))
          setShownPersons(shownPersons.concat(response.data))
        })
        setContactEventMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setContactEventMessage(null)
        }, 5000)
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

  const handleDeleteContact = (person) => {
    //let tempPersons = persons
    const isDeleted = window.confirm(`Delete ${person.name} ?`)
    if (isDeleted) {
      //tempPersons.splice(person.id - 1, 1)
      console.log('delete comfirmed')
      personService.deletePerson(person)
        .then(() => personService.getAllPersons()
        .then(response => {
          setPersons(response.data)
          setShownPersons(response.data)
        }))
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={contactEventMessage} />
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
      <Persons shownPersons={shownPersons} deleteContact={handleDeleteContact}/>
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