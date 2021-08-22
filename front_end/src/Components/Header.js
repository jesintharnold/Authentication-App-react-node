import DevSvg from "../Assets/devchallenges.svg";
import DevSvg_lg from "../Assets/devchallenges-light.svg";
import "../Styles/Head.scss";
import {useEffect, useState} from 'react';
import UseLocalStorage from "./ReusableHooks/useLocalStorage";
import {DarkMode} from './DarkMode';

export const Head=()=>{

    const [toggle,setToggle]=useState(false);
    const [darkTheme,setDarkTheme]=useState(window.localStorage.getItem("Dark-Mode")||0);

    
    useEffect(()=>{
      

    },[darkTheme]);
    
return(
    <div className="Head">
        <img src={darkTheme==1?DevSvg_lg:DevSvg} alt="Not found"/>
        <DarkMode  setdark={setDarkTheme} dark={darkTheme} />
        <div className="Name_plate__wrapper">
         <div className="name__plate" onClick={()=>setToggle(!toggle)}>
           <img src="https://unsplash.com/photos/x_8oJhYU31k/download?force=true&w=640"/>
           <div className="Name">Xanthe Neal</div>
           <i  className={toggle?'uis uis-triangle triangle  option__active':'uis uis-triangle triangle'}></i> 
           </div>
           <div className={toggle?'options__plate  option__active':'options__plate'} style={darkTheme==1?{background:'black'}:{background:'white'}}>
               <div className="dark__toggle__bt">
               <DarkMode  setdark={setDarkTheme} dark={darkTheme} />
               <span>{darkTheme===1?'Light':'Dark'}</span>
               </div>
             <div className="profile">
                 <i class="uil uil-user-circle"></i>
                 <span>My Profile</span>
                 </div>
             <div className="chat">
             <i class="uil uil-users-alt"></i>
             <span>Group Chat</span>
             </div>
             <div className="break"></div>
             <button className="logout">
             <i class="uil uil-signout"></i>
             <span>Logout</span>
             </button>
         </div>
         </div>
         
         
    </div>

)
};

