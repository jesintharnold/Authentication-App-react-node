import Google from "../Assets/Google.svg";
import '../Styles/PersonalInfo.scss';

export const PersonalInfo=()=>{
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


export const PersonalInfoEdit=()=>{
return(
  <div className="personal_info_edit">


   <div className="anchor__tag">
   <a href="/" className="back">
   <i class="uil uil-angle-left"></i>
   <span>Back</span>
   </a>
   </div>


   <div className="info_edit_container">

   <div className="info__title">
     <span>Change Info</span>
     <span>Changes will be reflected to every services</span>
   </div>
   
   
   <div className="profile_img_cont">
     <div className="img_cont">
    
     <img src={Google}/>
     </div>
     <div>
     CHANGE PHOTO
     </div>
   </div>
   
   <div className="input_cont name">
     <label for="name">Name</label>
     <input type="text" name="name" id="name" placeholder="Enter your name..."/>
   </div>
   

   <div className="input_cont bio">
     <label for="bio">Bio</label>
     <textarea type="textarea" rows="4" name="bio" id="bio" placeholder="Enter your bio..."/>
   </div>

   <div className="input_cont phone">
     <label for="phone">Phone</label>
     <input type="text" name="phone" id="phone" placeholder="Enter your phone..."/>
   </div>


   <div className="input_cont email">
     <label for="email">Email</label>
     <input type="email" name="email" id="email" placeholder="Enter your email..."/>
   </div>

   <div className="input_cont password">
     <label for="password">Password</label>
     <input type="text" name="password" id="password" placeholder="Enter your new password..."/>
   </div>

    <button className="save__bt">Save</button>

  </div>
  </div>
)
}