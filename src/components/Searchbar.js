import React from 'react'

export default function Searchbar() {
  const updateSearch = event => {console.log(event)};
  return (
    <div>
      <input 
        type="search" 
        name="searchbar" 
        id="searchbar" 
        onChange = {updateSearch}
      />
    </div>
  )
}
