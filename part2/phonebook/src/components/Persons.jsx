import Person from './Person'

const Persons = ({ persons, filter, deleteEntry }) => {
    console.log("persons:", persons)
    const personsFiltered =
        persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    console.log("persons filtered:", personsFiltered)

    return (
        <div>
            <ul>
                {personsFiltered.map(person =>
                    <Person key={person.id} person={person} deleteEntry={deleteEntry} />
                )}
            </ul>
        </div>
    )
}

export default Persons
