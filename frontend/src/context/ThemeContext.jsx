

import { createContext, useReducer } from "react";

export const ThemeContext=createContext()

const themeReducer=(state,action)=>{

    switch (action.type) {
        case "CHANGE_COLOR":

        return {...state, color:action.payload}
            
            
    
        default:
            state
    }



}

export function ThemeProvider({children}){

    const [state,dispatch ]=useReducer(themeReducer, {

        color:"#249c6b"

    })

    const changeColor=(color)=>{

        dispatch({type:'CHANGE_COLOR', payload:color})
    }

    return(


        <ThemeContext.Provider value={{...state, changeColor}}>

            {children}

        </ThemeContext.Provider>


    )


}