import React from 'react'
import bell from '../assets/Bell.svg'
import camcorder from '../assets/Camcorder.svg'
import mic from '../assets/Mic.svg'
import search from '../assets/Search.svg'
import User from '../assets/UserInitial.svg'

const SearchBar = () => {
  const [searchQuery ,setSearchQuery] = React.useState('')
  return (
    // searchbar
    <div className='searchbar items-center '>
      <div className='search'>
        <img src={search} alt="search icon" className='mb-1'/>
        <input 
        value={searchQuery}
         type="search" 
         name="searchbar" 
         onChange={(e) => setSearchQuery(e.target.value)}
         id="searchbar" 
         placeholder='Geisha' 
         />
        <img src={mic} alt="mic icon" className='mb-1'/>
      </div>

        <span className=''>
          <img src={camcorder} alt="camcorder icon" />
          <img src={bell} alt="bell icon" />
          <img src={User} alt="user initials" />
        </span>
    </div>
  )
}

export default SearchBar