import { NavLink, Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import  './RootLayout.css'
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTheme } from "../hooks/useTheme";
import ThemeSelector from "../components/ThemeSelector";

import { useLocation } from "react-router-dom";


const RootLayout = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()
  const location = useLocation()

  const { color, } = useTheme()


  return (

    <>

      <header>

        <nav className="navbar" style={{ background: color }}>

          {!user && (
            <>
              <ul ><NavLink to='/' >Home</NavLink></ul>
              <ul><NavLink to='login' >Login</NavLink></ul>
              <ul><NavLink to='signup' >Signup</NavLink></ul>
              <ul><NavLink to='about' >About</NavLink></ul>
            </>
          )}


          {user && (

            <>
              <ul ><NavLink to='/' >Home</NavLink></ul>
              <ul><NavLink to='profile' >Profile</NavLink></ul>
              <ul><NavLink to='help' >Help</NavLink></ul>
              <ul style={{ marginLeft: "100px" }}>{user.email}...good luck!</ul>
              <button style={{ marginLeft: "500px", marginBottom: "25px" }} onClick={logout}>Logout</button>
              
            </>


          )}


        </nav>
        <ThemeSelector />
      </header >

      <main >
        <Outlet />
      </main>

      {!(
        location.pathname.startsWith('/apply') ||
        location.pathname.startsWith('/login') ||
        location.pathname.startsWith('/signup') ||
        location.pathname.startsWith('/signup') ||
        location.pathname.startsWith('/help/contact')
      ) && <SearchBar />}




      <footer>
        Copyright &copy; Ant technology

      </footer>




    </>
  );
}

export default RootLayout