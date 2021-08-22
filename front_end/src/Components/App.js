import '../Styles/App.scss';
import {Register,Login} from './Login/Login';
import {PersonalInfo,PersonalInfoEdit} from './PersonalInfo';
import {Head} from './Header';
import {DarkMode} from '../Components/DarkMode';

function App() {
  return (
    <div className="App">  
    <DarkMode/>
    <div className="foot">
     <span> JesinthArnold</span>
     <span>devchallenges.io</span>
     </div>
    </div>
  );
}

export default App;
