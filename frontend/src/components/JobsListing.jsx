

import { NavLink } from "react-router-dom";


const JobsListing = ({ data }) => {

  if (data.length === 0) {

    return <div>sorry your dream jpb is not here!</div>
  }

  return (
    <>


      <ul>
        {data && data.map((job, index) => (
          <div className="careers" key={job._id}>
            {console.log(job._id, index)}
            <NavLink to={`jobDetails/${job._id}`}>
              <h3><strong>Title:</strong> {job.title}</h3>
              <p><strong>Description:</strong> {job.description}</p>
              <p><strong>Salary:</strong> ${job.salary}</p>
              <p><strong>Location:</strong> {job.location}</p>

            </NavLink>

          </div>
        ))}
      </ul>

    </>
  );
}

export default JobsListing