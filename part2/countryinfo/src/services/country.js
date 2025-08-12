import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

const getSearchResult = (searchText) => {
    const request = axios.get(`${baseUrl}/all`)
    const returnedCountries = request.then(response => response.data)
}


const getOne = (countryName) => {
    const request = axios.get(`${baseUrl}/name/${countryName}`)
    return request.then(response => response.data)
}

export default { getAll, getOne, }
