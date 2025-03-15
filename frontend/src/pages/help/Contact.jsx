
import style from './Contact.module.css'


const Contact = () => {


    return ( 

        <>
        <h3 style={{marginLeft:"650px"}}>Contact Us</h3>
        <div className="style.form">
      
      <form>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
        </>
     );
}
 
export default Contact;