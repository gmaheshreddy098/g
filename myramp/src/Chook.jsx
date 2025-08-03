
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





git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/gmaheshreddy098/Mproject.git
git push -u origin main
