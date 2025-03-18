

import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useAuthContext } from "../hooks/useAuthContext";



const JobDetails = () => {

    const { id } = useParams()
    const url = `https://backendcapstone-vdzh.onrender.com/listing/${id}`
    const { data, error, isPending } = useFetch(url);
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();
        if (user) {
            navigate(`/apply/${data._id}`);
        } else {
            alert("Sign in or create an account");
            navigate('/signup');
        }
    };

    return (
        <>

            <div className="job-details">
                {isPending && <div>Loading.....</div>}
                {error && <div style={{ color: "red" }}>{error}</div>}


                {data && (

                    <div className="job-card">
                        <h2>{data.title}</h2>
                        <p><strong>Description:</strong> {data.description}</p>
                        <p><strong>Salary:</strong>${data.salary}</p>
                        <p><strong>Location:</strong> {data.location}</p>

                    </div>

                )}

                <button onClick={handleClick} className="apply-btn">Apply Now</button>

            </div>

        </>
    );
}

export default JobDetails;