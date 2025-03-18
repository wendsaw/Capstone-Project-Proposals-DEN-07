
import { useParams } from "react-router-dom";

const Confirmation = () => {

const {params}=useParams()

console.log(params);

    return (
      <div style={{ border:"solid" , width:"50%", height:"50%",padding: '5rem', marginLeft:"300px", textAlign:"center" }}>
        <h2>Application Submitted Successfully!</h2>
        <p>Thank you for applying. We’ll get back to you soon.</p>
      </div>
    );
  };
  
  export default Confirmation;
  
  