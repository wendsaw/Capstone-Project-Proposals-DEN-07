

import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'



export default function SearchBar() {

    const [search, setSearch]=useState('')
    const navigate=useNavigate()
    


    const handleSubmit=(e)=>{

        e.preventDefault()
        

        navigate(`search?q=${search}`)

        
        
    }


  return (
    <div className="searchbar">
  <form onSubmit={handleSubmit}  >
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
