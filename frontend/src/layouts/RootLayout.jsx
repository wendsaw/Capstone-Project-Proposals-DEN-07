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
      <SearchBar/>
        <nav className={style.navbar}>
          <ul>
            <li className={style.title}>Wend Jobs </li>

            {!user && (
              <>
                <li style={{ marginRight: "100px" }}><NavLink to='/' className="links">Home</NavLink></li>
                <li><NavLink to='login' className="links">Login</NavLink></li>
                <li><NavLink to='signup' className="links">Signup</NavLink></li>
                <li style={{ marginRight: "50px" }}><NavLink to='about' className="links">About</NavLink></li>
              </>
            )}


            {user && (

              <>

                <li style={{ marginRight: "100px" }}><NavLink to='profile' className="links">Profile</NavLink></li>

                <ul style={{ display: 'flex', alignItems: 'center' }}>
                  <li style={{ marginRight: 'auto' }}>{user.email}...good luck!</li>
                  <button style={{marginLeft:"600px", marginBottom:"25px"}}onClick={logout}>Logout</button>
                  
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