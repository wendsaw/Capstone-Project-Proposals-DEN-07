



import { useState } from 'react';



const ApplicationForm = () => {
  

  const handleSubmit = async (e) => {

    e.preventDefault();

  }

  const handleChange=()=>{


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
            
            onChange={handleChange}
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
            
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
           
            onChange={handleChange}
            required
           
          />
        </label>

        
        <label>
          Resume URL:
          <input
            type="url"
            name="resumeUrl"
           
            onChange={handleChange}
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
