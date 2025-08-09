import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import phoneService from './services/phonebooks'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newMessage, setNewMessage] = useState(null)
  const [newMessageType, setNewMessageType] = useState(null)


  useEffect(() => {
    console.log('effect')
    phoneService.getAll().then(initialPhonebook => {
      setPersons(initialPhonebook)
    }
    )
    console.log('render', persons.length, 'persons')
  }, []);

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    console.log(`personObject is ${newName} ${newNumber}`)
    console.log(`personObject is ${personObject}`)
    if (persons.some(person => person.name === newName)) {
      const existingPerson = persons.find(person => person.name === newName)
      console.log('existingPerson: ', existingPerson)
      updatePersonNumber(existingPerson.id, personObject);
    } else {
      phoneService
        .create(personObject)
        .then(returnedObject => {
          setPersons(persons.concat(returnedObject));
          setNewMessage(
            `Added ${returnedObject.name}`
          )
          setNewMessageType(
            'successMessage'
          )
          setTimeout(() => {
            setNewMessage(null);
            setNewMessageType(null);
          }, 5000)
        })
    }
    setNewName('')
    setNewNumber('')
    console.log("persons:", persons)
  }

  const updatePersonNumber = (id, personObject) => {
    if (window.confirm(`${personObject.name} is already added to the phonebook, replace the old number with a new one?`)) {
      phoneService
        .update(id, personObject)
        .then(updatedPerson => {
          console.log(`updated person with ${id} to ${personObject.name}, ${personObject.number}`)
          setPersons(persons.map(person => person.id === id ? updatedPerson : person));
          setNewMessage(
            `updated ${personObject.name}`
          )
          setNewMessageType(
            'successMessage'
          )
          setTimeout(() => {
            setNewMessage(null);
            setNewMessageType(null);

          }, 5000)
        })
    } else {
      console.log("update canceled!");
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const deleteEntry = id => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      phoneService
        .deleteEntry(id)
        .then(response => {
          console.log('success!');
          setNewMessage(
            `deleted ${person.name}`
          );
          console.log('set new message type!');
          setNewMessageType(
            'successMessage'
          );
          setTimeout(() => {
            setNewMessage(null);
            setNewMessageType(null);
          }, 5000);
        })
        .catch(error => {
          setNewMessage(
            `the person '${person.name}' was already deleted from server`
          )
          setNewMessageType(
            'errorMessage'
          )
          setTimeout(() => {
            setNewMessage(null);
            setNewMessageType(null);
          }, 5000)
        })
      setPersons(persons.filter(p => p.id !== id));
    } else {
      console.log("deletion canceled!");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newMessage} type={newMessageType} />
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={newFilter}
        deleteEntry={deleteEntry}
      />
    </div>
  )
}

export default App