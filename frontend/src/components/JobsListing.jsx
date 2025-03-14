

import { NavLink } from "react-router-dom";


const JobsListing = ({data}) => {

  return (
    <>


      <ul>
        {data && data.map((job, index) => (
          <div className="jobs" key={job.id}>
            {console.log(job.id, index)}
            <NavLink to={`job/${job._id}`}>
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