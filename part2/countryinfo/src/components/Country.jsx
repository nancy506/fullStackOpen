
const Country = ({ country, showDetail }) => {
  if (showDetail) {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>
          <strong>Capital:</strong> {country.capital[0]}
        </p>
        <p>
          <strong>Area:</strong> {country.area}
        </p>
        <h3>Languages</h3>
        <ul>
          {Object.keys(country.languages).map((key) => (
            <li key={key}>
              {country.languages[key]}
            </li>
          ))}
        </ul>
        <p>
          {country.flag}
        </p>

      </div>
    )
  }

  else {
    return (
      <div>
        <p>{country.name.common}</p>
      </div>
    )

  }
}


export default Country