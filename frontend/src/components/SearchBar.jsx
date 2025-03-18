

import { useState } from 'react'
import './Searchbar.css'
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
    <div className="searchbar" >
  <form onSubmit={handleSubmit} style={{background:color}} >
    <label>
    <p id="title">
  Wend Job <img src="./searchLogo.svg" alt="logo" className="logo" />
</p>
      
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
