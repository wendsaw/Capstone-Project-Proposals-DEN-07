

import { NavLink } from "react-router-dom";


const JobsListing = ({data}) => {

  if (data.length===0){

    return <div>sorry your dream jpb is not here!</div>
  }

  return (
    <>


      <ul>
        {data && data.map((job, index) => (
          <div className="careers" key={job._id}>
            {console.log(job._id, index)}
            <NavLink to={`jobDetails/${job._id}`}>
              <li className="jobs">Title:{job.title}</li>
              <p className="jobs">Description:{job.description}</p>
              <p className="jobs">salary:{job.salary}</p>
              <p className="jobs">Location:{job.location}</p>

            </NavLink>

          </div>
        ))}
      </ul>

    </>
  );
}

export default JobsListing