

import { createContext, useReducer,useEffect } from "react";

import { projectAut } from "../firebase/Confi";

export const authReducer=(state,action)=>{

    switch (action.type) {

        case 'LOGIN':
            return {...state, user:action.payload}

        case 'LOGOUT':

        return { ...state, user:null}

        case 'AUT_IS_READY':

        return { ...state, user:action.payload, authIsReady:true}
    
        default:
            return state    
    }


}


export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{

    const [state, dispatch]=useReducer(authReducer, {
        user:null,
        authIsReady:false
    })
     useEffect(() => {

        const unsub =projectAut.onAuthStateChanged((user)=>{

            dispatch({type:"AUT_IS_READY", payload:user})

            unsub()


        })
        
        return () => {
            
        };
     }, []);

    console.log('AuthContext state',state);
    

    return(

       <AuthContext.Provider value={{...state, dispatch}}>
        {children}
       </AuthContext.Provider> 
    )
}