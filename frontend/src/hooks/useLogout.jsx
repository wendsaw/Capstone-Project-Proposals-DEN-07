

import { useState,useEffect} from "react";
import { projectAut } from "../firebase/Confi";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from 'react-router-dom';



export const  useLogout =()=>{
    const [isCancelled, setIsCancelled]=useState(false)

    const [error, setError]=useState(null)
    const [isPending, setIsPending]=useState(false)
    const {dispatch}=useAuthContext()
    const navigate = useNavigate();

    const logout= async ()=>{
        setError(null)
        setIsPending(true)

        //sign the user out 

        try {


            await projectAut.signOut()

            // dispatch logout action

            dispatch({type:'LOGOUT'})

            //update state

            if (!isCancelled){
                setError(null)
                setIsPending(false)
                navigate('/login', { replace: true });

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

return { logout, error, isPending}

}
