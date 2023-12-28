import React from 'react'
import mic from '../assets/Mic.svg'
import search from '../assets/Search.svg'
import camcorder from '../assets/Camcorder.svg'
import User from '../assets/UserInitial.svg'
import bell from '../assets/Bell.svg'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <div className='search'>
        <img src={search} alt="search icon" />
        <input type="search" name="searchbar" id="searchbar" placeholder='Geisha' />
        <img src={mic} alt="mic icon" />
      </div>

        <span>
          <img src={camcorder} alt="camcorder icon" />
          <img src={bell} alt="bell icon" />
          <img src={User} alt="user initials" />
        </span>
    </div>
  )
}

export default SearchBar