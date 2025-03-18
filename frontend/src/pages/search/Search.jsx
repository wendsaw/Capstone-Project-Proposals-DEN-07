import { useLocation } from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch.jsx'

// components
import JobsListing from '../../components/JobsListing';

const Search = () => {

    const queryString=useLocation().search

    const queryParams=new URLSearchParams(queryString)
    const query=queryParams.get('q')
    console.log(query);
    

    const url = `https://backendcapstone-vdzh.onrender.com/listings/${query}`;

    const {error, isPending, data}=useFetch(url)


    return ( 

        <div>

        <h2 className='title'> Possible match for your dream job:{query}</h2>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading....</p>}
        {data && <JobsListing data={data}/>}
        </div>



     );
}
 
export default Search;