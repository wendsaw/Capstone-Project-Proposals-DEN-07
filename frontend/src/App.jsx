
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, useNavigate } from 'react-router-dom';
import { Route } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';


import Home from './pages/home/Home'
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Profile from './pages/Profile';

//components
import JobDetails from './components/JobDetails';
import Search from './pages/search/Search';
import ApplicationForm from './components/ApplicationForm';
import Confirmation from './components/Confirmation';

//layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';




// const {user} = useAuthContext()

//   const navigate=useNavigate()

const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>

      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='about' element={<About />} />
      <Route path='profile' element={<Profile />} />
      <Route path="/apply/id/confirmation" element={<Confirmation />} />
      < Route path='search' element={<Search />} />
      <Route path='search/jobDetails/:id' element={<JobDetails />} />
      <Route path="/apply/:id" element={<ApplicationForm />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>



    </Route>


  )
)

function App() {



  return (
    <>


      <div>


        <RouterProvider router={router} />

      </div>


    </>
  )
}

export default App
