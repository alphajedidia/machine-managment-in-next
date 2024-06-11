import React from 'react'
import { SearchIcon } from '../icons'

const SearchBarEngin = () => {
  return (
    <div className=' bg-transparent flex border border-secondary-200 w-fit m-auto rounded-lg shadow-lg' >
        <input type="search" name="tesr" id="test" className='m-1 px-4 py-2 outline-none ml-4 bg-transparent' placeholder='Recherche T Engin'/>
        <button className=' bg-primary-500 rounded-tr-lg rounded-br-lg'><SearchIcon iconStyle=' w-8 m-2 mx-6 text-primary-900'/></button>
    </div>
  )
}

export default SearchBarEngin