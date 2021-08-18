import Google from "../Assets/Google.svg";
import '../Styles/PersonalInfo.scss';
const PersonalInfo=()=>{
    return(
        <div className="personal_info">
          <div className="title_info">
              <span>Personal info</span>
              <span>Basic info, like your name and photo</span>
          </div>
          <div className="container__border">
          <div className="nav_edit">
              <div>
              <span>Profile</span>
              <span>Some info may be visible to other people</span>
              </div>
              <button>Edit</button>
           </div>

           <div className="container__flex">

             <div className="cont_flex">
             <h>PHOTO</h>
             <div className="profile__img">
             <img src={Google} alt="profile_image"/>
             </div> 
             </div>

             <div className="cont_flex">
             <h>NAME</h>
             <p>Xanthe Neal</p>
             </div>

             <div className="cont_flex">
             <h>BIO</h>
             <p>I am a software developer and a big fan of devchallenges...</p>
             </div>

             <div className="cont_flex">
             <h>PHONE</h>
             <p>908249274292</p>
             </div>

             <div className="cont_flex">
             <h>EMAIL</h>
             <p>xanthe.neal@gmail.com</p>
             </div>

             <div className="cont_flex">
             <h>PASSWORD</h>
             <p>***********</p>
             </div>

           </div>


           </div>
           </div>
    )
}


export default PersonalInfo;