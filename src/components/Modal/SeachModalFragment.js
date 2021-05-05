import React from 'react'

const SearchModalContent = (props) => {
  return (
      <>
        { props.user ? (
            <>
              <h1>{ props.user.full_name}</h1>
              <p>{props.user.date_of_birth}</p>
              <p>{props.user.personal_email}</p>
              <p>{props.user.phone}</p>
              <p>{props.user.city}</p>
            </>
        ) : null}
      </>
  )
}

export default SearchModalContent
