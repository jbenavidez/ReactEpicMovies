import React from 'react'

const SearchBar = ({onChange, onKeyUp, value}) => (
  <input 
    onChange={onChange} 
    onKeyUp={onKeyUp} 
    value={value} 
    placeholder="Search Movies ..."

    style ={{fontWeight:"bolder" , border: "2px solid rgb(255,255,255)"}}
  />
)

export default SearchBar;