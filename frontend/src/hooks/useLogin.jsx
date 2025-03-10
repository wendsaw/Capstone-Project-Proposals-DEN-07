

import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import { projectAut } from "../firebase/Confi";
import { useAuthContext } from "./useAuthContext";




export const  useLogin =()=>{

    const navigate=useNavigate()

    const [isCancelled, setIsCancelled]=useState(false)

    const [error, setError]=useState(null)
    const [isPending, setIsPending]=useState(false)
    const {dispatch}=useAuthContext()

    const login= async (email,password)=>{
        setError(null)
        setIsPending(true)

       

        try {


           const res= await projectAut.signInWithEmailAndPassword(email,password)

            // dispatch logout action

            dispatch({type:'LOGIN', payload:res.user})

            //update state

            if (!isCancelled){
                setError(null)
                setIsPending(false)
                

            }
           
            

            
        } catch (error) {
            if (!isCancelled){
                
                console.log(error.message);
                setError(error.message)
                setIsPending(false)

            }

           
            
        }
    }

    useEffect(() => {
        
        return () => setIsCancelled(true)
    }, []);

return { login, error, isPending}

}
