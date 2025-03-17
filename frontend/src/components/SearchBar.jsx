

import { useState } from 'react'
import style from './SearchBar.module.css'
import { useNavigate } from 'react-router-dom'

import { useTheme } from '../hooks/useTheme'

export default function SearchBar() {

    const [search, setSearch]=useState('')
    const navigate=useNavigate()
    const {color, }=useTheme()

    const handleSubmit=(e)=>{

        e.preventDefault()
        

        navigate(`search?q=${search}`)

        
        
    }


  return (
    <div className="searchbar">
  <form onSubmit={handleSubmit}  >
    <label>
      <strong>Search:</strong>
      <input 
        type="text" 
        onChange={(e) => setSearch(e.target.value)} 
        required 
      />
    </label>
  </form>
</div>

  )
}
