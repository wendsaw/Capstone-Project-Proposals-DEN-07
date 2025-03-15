

import { useParams,useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";


const JobDetails = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/listing/${id}`

    const { data, error, isPending } = useFetch(url);

    const { user } = useAuthContext()

    const navigate=useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        if (user){


            navigate('/apply')

        }

        else{

            alert("sigIn or Create an account");

            navigate('/login')

            
        }
        
    
       
      }

    return (
        <>

            <div className="job-details">
                {isPending && <div>Loading.....</div>}
                {error && <div style={{ color: "red" }}>{error}</div>}
                
                        <NavLink to={`jobApply/${id}`}>
                            {data && (
                                <div className="job-card">
                                    <h2>{data.title}</h2>
                                    <p><strong>Description:</strong> {data.description}</p>
                                    <p><strong>Salary:</strong>${data.salary}</p>
                                    <p><strong>Location:</strong> {data.location}</p>
                                    
                                </div>
                            )}
                        </NavLink>
                        <button onClick={handleClick} className="apply-btn">Apply Now</button>

            </div>

        </>
    );
}

export default JobDetails;