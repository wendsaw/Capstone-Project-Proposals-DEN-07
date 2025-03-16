import { NavLink, Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import style from './RootLayout.module.css'
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTheme } from "../hooks/useTheme";
import ThemeSelector from "../components/ThemeSelector";

const RootLayout = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const {color, changeColor}=useTheme()
  

  return (

    <>

      <header>
      
        <nav  className={style.navbar} style={{background:color}}>
          
          <ul>
          
            {!user && (
              <>
                <li ><NavLink to='/' >Home</NavLink></li>
                <li><NavLink to='login' >Login</NavLink></li>
                <li><NavLink to='signup' >Signup</NavLink></li>
                <li><NavLink to='about' >About</NavLink></li>
              </>
            )}


            {user && (

              <>

                <li><NavLink to='profile' >Profile</NavLink></li>
                <li><NavLink to='help' >Help</NavLink></li>

                <ul>
                  <li >welcome {user.email}...good luck!</li>
                  <button style={{marginLeft:"500px", marginBottom:"25px"}}onClick={logout}>Logout</button>
                  
                  
                </ul>
                
              
          </>


            )}
           

        </ul>
       
      </nav>
      <ThemeSelector/>
    </header >
    
      <main >
  <Outlet />
</main>

<span style={{marginLeft:"650px"}} >
  Wend Job
</span>

<SearchBar/>

      <footer>
    Copyright &copy; Ant technology
  
      </footer>
      



    </>
  );
}

export default RootLayout