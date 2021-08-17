import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch,Link,Route} from 'react-router';

//components import

import App from './Components/App';



ReactDOM.render(
  <React.StrictMode>

    
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
