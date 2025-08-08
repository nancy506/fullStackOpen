import Button from './Button'

const Person = ({ person, deleteEntry }) => {
  console.log(person)
  return (
    <li>{person.name} {person.number}
      <Button onClick={() => deleteEntry(person.id)} text="delete" />
    </li>
  )
}

export default Person
