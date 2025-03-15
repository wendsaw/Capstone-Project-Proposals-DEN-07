

import { useParams,useNavigate } from "react-router-dom";

import { useState } from 'react';
import { useApply } from "../hooks/useApply";

const ApplicationForm = () => {

  const { id } = useParams()

  console.log(id);
  
 
    const [fullName, setFullName]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')
    const [resume, setResume]=useState('')
    const [jobId, setJobId]=useState('')
    
    const{apply,error,isPending}=useApply()

   
  
   
   

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setJobId(id)
    apply(fullName,email,phone,resume,jobId);
  


  }

 
    
  return (
    <div className="application-form" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{textAlign:"center"}}>Applying for </h2>

      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e)=> setFullName(e.target.value)}
            required
            minLength={3}
            maxLength={100}
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
           value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            required
           
          />
        </label>

        
        <label>
          Resume URL:
          <input
            type="text"
            name="resumeUrl"
           value={resume}
            onChange={(e)=>setResume(e.target.value)}
            required
          />
        </label>

        <button type="submit" style={{ marginTop: '1rem' }}>Submit Application</button>

        {/* {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
        {success && <p style={{ color: 'green', marginTop: '1rem' }}>{success}</p>} */}
      </form>
    </div>
  );
};

export default ApplicationForm;
