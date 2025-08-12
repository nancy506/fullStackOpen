import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import countryService from './services/country'
import './App.css'
import Country from './components/country'

function App() {
  const [newFilter, setNewFilter] = useState('')
  const [newCountryList, setNewCountryList] = useState([])
  const [filteredCountryList, setFilteredCountryList] = useState([])


  useEffect(() => {
    console.log('initial render')
    countryService
      .getAll()
      .then(allCountries => {
        console.log('allCountries ', allCountries)
        setNewCountryList(allCountries)
      }
      )
      .catch(error => {
        console.log(
          `error getting country list from api`
        )
      })
  }, []);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value
    console.log(filterValue)
    setNewFilter(filterValue) // This line is now primarily for updating the state for display or future use
    console.log(`use ${filterValue} to request country list from countryService`)
    if (filterValue) {
      const filterCountries =
        newCountryList.filter(country => country.name.common.toLowerCase().includes(filterValue.toLowerCase()))
      console.log('filterCountries ', filterCountries)
      setFilteredCountryList(filterCountries)
    }
    else {
      console.log('no filter. set to all countries')
    }
  }


  const toggleShowDetail = (name) => {
    const country = newCountryList.find(c => c.name.common === name)
    setFilteredCountryList([country])
  }

  switch (true) {
    case !newFilter:
      return (
        <div>
          <Filter value={newFilter} onChange={handleFilterChange} text="find Countries " />
          <p>Set filter</p>
        </div>
      )
    case filteredCountryList.length <= 10 && filteredCountryList.length > 1:
      return (
        <div>
          <Filter value={newFilter} onChange={handleFilterChange} text="find Countries " />
          <ul>
            {filteredCountryList.map((country) =>
            (<li key={country.name.common} >
              <Country country={country} showDetail={false} />
              <button onClick={() => toggleShowDetail(country.name.common)}> show </button>
            </li>
            ))}
          </ul>
        </div>
      )
    case filteredCountryList.length === 1:
      const country = filteredCountryList[0]
      return (
        <div>
          <Filter value={newFilter} onChange={handleFilterChange} text="find Countries " />
          <Country country={country} showDetail={true} />
        </div>
      )
    case filteredCountryList.length > 10:
      return (
        <div>
          <Filter value={newFilter} onChange={handleFilterChange} text="find Countries " />
          <p>{filteredCountryList.length} matches, too many to display</p>
        </div>
      )
    case filteredCountryList.length < 1 && newFilter:
      return (
        <div>
          <Filter value={newFilter} onChange={handleFilterChange} text="find Countries " />
          <p>no match</p>
        </div>
      )
    default:
      return (
        <div>
          <Filter value={newFilter} onChange={handleFilterChange} text="find Countries " />
        </div>
      )
  }
}


export default App
