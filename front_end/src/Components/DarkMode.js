import { useEffect, useRef, useState } from 'react';
import '../Styles/DarkMode.scss';
import UseLocalStorage from './ReusableHooks/useLocalStorage';

export const DarkMode=({setdark,dark})=>{
    const check__ref=useRef(null);
    let dark_value=UseLocalStorage();
    const [check,setCheck]=useState(false);
    const setDark=()=>{
        let body_list=document.body.classList.length;
        if(body_list===0){
            document.body.classList.add('dark__active');
            window.localStorage.setItem("Dark-Mode",1);
            check__ref.current.checked=true;
            setdark(1);
            }
            else{
                document.body.removeAttribute('class');
                window.localStorage.setItem("Dark-Mode",0);
                check__ref.current.checked=false;
                setdark(0);
            }
        
        }

    useEffect(()=>{

       if(dark_value===1){
            check__ref.current.checked=true;
            document.body.classList.add('dark__active');
            setdark(1);
       }else{
            check__ref.current.checked=false;
            document.body.removeAttribute('class');
            setdark(0);
       }

    },[dark_value]);


    return (
        <div className="check__center"> 
        <input type="checkbox" ref={check__ref} onClick={()=>setDark()}/>
        </div>
    )
};

