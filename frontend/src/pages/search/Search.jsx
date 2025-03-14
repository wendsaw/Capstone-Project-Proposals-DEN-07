import { useLocation } from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch.jsx'

// components
import JobsListing from '../../components/JobsListing';

const Search = () => {

    const queryString=useLocation()
    const queryParams=new URLSearchParams(queryString)
    const query=queryParams.get('q')

    const url='http://localhost:3000/listings?q=' + query
    const {error, isPending, data}=useFetch(url)


    return ( 

        <div>

        <h2 className='page-title'> Possible match for your dream job:{query}</h2>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading....</p>}
        {data && <JobsListing data={data}/>}
        </div>



     );
}
 
export default Search;