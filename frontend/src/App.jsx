
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Route } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
import RequireAuth from './components/RequireAuth';
//pages

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

//layouts
import RootLayout from './layouts/RoutLayout';


const router = createBrowserRouter(

  createRoutesFromElements(

     <Route path='/' element={<RootLayout />}>
      <Route element={<RequireAuth />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path='signup' element={<Signup />}/>

    </Route>

    
  )
)

function App() {

  const {authIsReady,user}=useAuthContext()

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
