
import { createContext, useState, useContext } from 'react';


 const GiftContext=createContext();


export const GiftProvider=({children})=>{

    const[message,setMessage]=useState("the data is used")
    return(
        <GiftContext.Provider value={{message,setMessage}}>
            {children}
        </GiftContext.Provider>
    )
}

export const useGiftContext=()=>useContext(GiftContext)
export default GiftProvider


