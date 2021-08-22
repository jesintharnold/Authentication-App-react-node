import { useEffect, useState } from "react";

const UseLocalStorage=()=>{
    const [darkVal,setDarkVal]=useState(JSON.parse(window.localStorage.getItem("Dark-Mode")||0));

  

    useEffect(()=>{

        function DarkTheme(){
            let val=JSON.parse(window.localStorage.getItem("Dark-Mode")||0);
            setDarkVal(val);
        }
         window.addEventListener('storage',DarkTheme);
        
        return ()=>window.removeEventListener('storage',DarkTheme)
    },[]);

    return darkVal;
}

export default UseLocalStorage;