const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }

  if (type === 'errorMessage') {
    return (
      <div className='errorMessage'>
        {message}
      </div>
    )
  } else if (type === 'successMessage') {
    return (
      <div className='successMessage'>
        {message}
      </div>
    )
  }
}

export default Notification
