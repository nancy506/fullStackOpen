
const Filter = ({ value, onChange, text }) => {
    console.log({ value, onChange, text })
    return (
        <div>{text}  <input
            value={value}
            onChange={onChange} /></div>
    )
}

export default Filter
