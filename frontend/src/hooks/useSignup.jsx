
import { useState, useEffect } from "react";
import { projectAut } from "../firebase/Confi";

import { useAuthContext } from "./useAuthContext";





export const useSignup = () => {
    const [isCancelled, setIsCancelled]=useState(false)

    const [error, setError]=useState(null)
    const [isPending, setIsPending]=useState(false)

    const {dispatch}=useAuthContext()

    const signup= async ( email,password,displayName)=>{

        setError(null)
        setIsPending(true)

        try {
            //signup

           const res= await projectAut.createUserWithEmailAndPassword(email,password)
           

           if (!res){
            throw new Error("could not create user");
            
           }
           
            //add display name to user

            await res.user.updateProfile({displayName:displayName})

            //dispatch login action

            dispatch ({type:"LOGIN", payload:res.user})

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

   return {error,isPending,signup}
}
 
