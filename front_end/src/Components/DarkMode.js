import { useEffect, useRef } from 'react';
import '../Styles/DarkMode.scss';


export const DarkMode=()=>{
    const check__ref=useRef(null);

    const setDark=()=>{
        let body_list=document.body.classList.length;
        if(body_list===0){
            document.body.classList.add('dark__active');
            localStorage.setItem("Dark-Mode",1);
            }
            else{
                document.body.removeAttribute('class');
                localStorage.setItem("Dark-Mode",0);
            }
    }


    return (
        <div className="check__center"> 
        <input type="checkbox" ref={check__ref} onClick={()=>setDark()}/>
        </div>
    )
};

