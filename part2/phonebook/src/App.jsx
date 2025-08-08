import { useState, useEffect } from 'react'
import phoneService from './services/phonebooks'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
          setPersons(persons.concat(returnedObject))
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
        console.log(`response data is ${updatedPerson}`)
        setPersons(persons.map(person => person.id === id ? updatedPerson : person))
        console.log(`updated persons ${persons}`)
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
          console.log('success!')
        })
        .catch(error => {
          alert(
            `the person '${person.name}' was already deleted from server`
          )
        })
      setPersons(persons.filter(p => p.id !== id));
    } else {
      console.log("deletion canceled!");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
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