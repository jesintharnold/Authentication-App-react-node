
import '../../Styles/LoginRegister.scss';
import DevSVG from '../../Assets/devchallenges.svg';
import Google from "../../Assets/Google.svg";
import Facebook from "../../Assets/Facebook.svg";
import Github from "../../Assets/Gihub.svg";
import Twitter from "../../Assets/Twitter.svg";

const Login=()=>{
    return (
        <div className="login">
            <img src={DevSVG} alt="Not Found"/>
            <span className="span_1">
            Join thousands of learners from around the world 
            </span>
            <span className="span_2">
            Master web development by making real-life projects. There are multiple paths for you to choose
            </span> 

             <div className="input_container">
              <div className="email cont">
              <i class="uil uil-envelope-alt"></i>
              <input type="text" placeholder="Email"/>
              </div>
              <div className="password cont">
              <i class="uil uil-padlock"></i>
              <input type="password" placeholder="Password"/>
              </div>
              <button>Start coding now </button>
             </div>
             <span className="span_3">or continue with these social profile</span>
             <div className="auth_cont">
              <img src={Google}/>
              <img src={Facebook}/>
              <img src={Twitter}/>
              <img src={Github}/>
              
             </div>

             <span className="loginredirect">
             Adready a member? <a>Login</a>
             </span>

        </div>
    )
}

export default Login;