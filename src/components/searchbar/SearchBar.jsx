import React from 'react'
import './index.css'
function SearchBar() {
  return (
    <section className='search'>
        <input className='search__input' type="search" name="" id="" placeholder='your theme' />
        <button className='search__button'>Start</button>
    </section>
  )
}

export default SearchBar