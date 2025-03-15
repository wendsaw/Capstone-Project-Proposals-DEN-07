



import { useState } from 'react'
import style from './SearchBar.module.css'
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
    <div className='style.searchbar'>
     <form onSubmit={handleSubmit}>
      

        <label htmlFor="search"> <p><strong>Search</strong></p></label>
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
