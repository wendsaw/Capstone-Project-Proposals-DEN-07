
import { useParams } from "react-router-dom";
import { useTheme } from '../hooks/useTheme'

const Confirmation = () => {

  const { id } = useParams()
  const {color}=useTheme()

     console.log(id);

    return (
      <div style={{ border:"solid" , width:"50%", height:"50%",padding: '5rem', marginLeft:"300px", textAlign:"center", background:color }}>
        <h2>Application Submitted Successfully!</h2>
        <p>Thank you for applying. We’ll get back to you soon.</p>
      </div>
    );
  };
  
  export default Confirmation;
  
  