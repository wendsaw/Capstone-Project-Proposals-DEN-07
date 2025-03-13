

import { useState,useEffect} from "react";
import { projectAut } from "../firebase/Confi";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const  useLogout =()=>{
    

    const navigate=useNavigate()
    const {dispatch}=useAuthContext()
    
    const logout= async ()=>{
        

        //sign the user out

            localStorage.removeItem('user')

            // dispatch logout action

            dispatch({type:'LOGOUT'})

            navigate('/')


    }
           return { logout}
    }
