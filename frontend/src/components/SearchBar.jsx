

//style


import { useState } from 'react'
import './Searchbar.css'
import { useNavigate } from 'react-router-dom'



export default function SearchBar() {

    const [search, setSearch]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(e)=>{

        e.preventDefault()

        navigate(`search?q=${search}`)
        console.log('the search term is ',search);
        
    }


  return (
    <div className='searchbar'>
     <form onSubmit={handleSubmit}>

        <label htmlFor="search"> Search</label>
        <input 
        id='search'
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        required
         />
     </form>

      
    </div>
  )
}
