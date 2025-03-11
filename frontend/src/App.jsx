
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Route } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';


import Home from './pages/home/Home'
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Profile from './pages/Profile';

//layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';


const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>

      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='about' element={<About />} />
      <Route path='profile' element={<Profile />} />
      <Route Route path='help' element={<HelpLayout/>}> 
      <Route path='faq' element={<Faq/>}/>
      <Route path='contact' element={<Contact/>}/>
      </Route>
      


    </Route>


  )
)

function App() {

  const { authIsReady, user } = useAuthContext()

  return (
    <>

      {authIsReady && (
        <div>

          <RouterProvider router={router} />

        </div>
      )}

    </>
  )
}

export default App
