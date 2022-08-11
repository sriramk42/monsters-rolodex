import React from 'react'
import '../styles/SearchBox.css'

const SearchBox = ({placeholder, onChangeHandler}) => {
  return (
    <input 
      className='search-box'
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

export default SearchBox