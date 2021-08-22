import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch,Link,Route} from 'react-router';

//components import

import App from './Components/App';
import {Head} from '../src/Components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Head/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
