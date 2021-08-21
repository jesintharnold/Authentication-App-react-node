import DevSvg from "../Assets/devchallenges.svg";
import DevSvg_lg from "../Assets/devchallenges-light.svg";
import "../Styles/Head.scss";
import {useState} from 'react';

export const Head=()=>{

    const [toggle,setToggle]=useState(false);

return(
    <div className="Head">
        <img src={DevSvg} alt="Not Found"/>
        <div className="Name_plate__wrapper">
         <div className="name__plate" onClick={()=>setToggle(!toggle)}>
           <img src="https://unsplash.com/photos/x_8oJhYU31k/download?force=true&w=640"/>
           <div className="Name">Xanthe Neal</div>
           <i  className={toggle?'uis uis-triangle triangle  option__active':'uis uis-triangle triangle'}></i> 
           </div>
           <div className={toggle?'options__plate  option__active':'options__plate'}>
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

