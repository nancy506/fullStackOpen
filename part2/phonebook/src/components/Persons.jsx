import Person from './Person'

const Persons = ({ persons, filter}) => {
    console.log(persons)
    const personsFiltered =
        persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <ul>
                {personsFiltered.map(person =>
                    <Person key={person.id} person={person} />
                )}
            </ul>
        </div>
    )
}

export default Persons
