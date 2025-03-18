

import { useParams, useNavigate, } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from 'react';
import { useApply } from "../hooks/useApply";

const ApplicationForm = () => {

  const { id } = useParams()
  // https://backendcapstone-vdzh.onrender.com/
  // http://localhost:3000/
  const url = `https://backendcapstone-vdzh.onrender.com/listing/${id}`
  const { data } = useFetch(url);

  console.log(id);


  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [resume, setResume] = useState('')
  const { apply, error, isPending } = useApply()


  const handleSubmit = async (e) => {
    e.preventDefault();
    apply(fullName, email, phone, resume, id);
    

  }

  return (
    <div className="application-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
      {data && (
        <>
          <h2 style={{ textAlign: "center" }}>Job Tittle: {data.title}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                minLength={3}
                maxLength={100}
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
            <label>
              Resume URL:
              <input
                type="text"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                required
              />
            </label>
            {isPending && <div>Loading.....</div>}
            <button disabled={isPending} >Submit Application</button>
            {error && <div>{error}</div>}
          </form>
        </>
      )}
    </div>
  );
};

export default ApplicationForm;
