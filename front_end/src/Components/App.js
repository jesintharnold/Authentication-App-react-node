import '../Styles/App.scss';
import {Register,Login} from './Login/Login';
import {PersonalInfo,PersonalInfoEdit} from './PersonalInfo';

function App() {
  return (
    <div className="App">
    <PersonalInfoEdit/>
    <div className="foot">
     <span> JesinthArnold</span>
     <span>devchallenges.io</span>
     </div>
    </div>
  );
}

export default App;
