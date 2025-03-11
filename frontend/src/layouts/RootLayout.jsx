import { NavLink, Outlet } from "react-router-dom";


import style from './RootLayout.module.css'

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const RootLayout = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (

    <>

      <header>
        <nav className={style.navbar}>
          <ul>
            <li className={style.title}>Wend Jobs </li>

            {!user && (
              <>
                 <li style={{marginRight:"100px"}}><NavLink to='/' className="links">Home</NavLink></li>
                <li><NavLink to='login' className="links">Login</NavLink></li>
                <li><NavLink to='signup' className="links">Signup</NavLink></li>
                <li style={{marginRight:"50px"}}><NavLink to='about' className="links">About</NavLink></li>
              </>
            )}


            {user && (

              <>
              
              <li style={{marginRight:"100px"}}><NavLink to='profile' className="links">Profile</NavLink></li>
              
                <li style={{marginRight:"100px"}}> {user.displayName}... good luck!</li>
                <li>
                  <button className="btn" onClick={logout}>Logout</button>
                </li>
              </>


            )}

          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>



    </>
  );
}

export default RootLayout