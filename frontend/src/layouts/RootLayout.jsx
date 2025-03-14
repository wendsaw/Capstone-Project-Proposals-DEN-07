import { NavLink, Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

import style from './RootLayout.module.css'

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const RootLayout = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (

    <>

      <header>
      <img src="../logo.webp" alt="logo" 
        style={{
          height: "5em",
          top: "0",
          left: "1rem",
          zIndex: "1000"
        }}
      />
      
      <SearchBar/>
        <nav className={style.navbar}>
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
    </header >
      <main className={style.main}>
  <Outlet />
</main>
      <footer>
    Copyright &copy; Ant technology
  
      </footer>
      



    </>
  );
}

export default RootLayout