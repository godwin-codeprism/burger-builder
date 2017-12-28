import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './css/Globals.css';
// import './css/animate.css';

import Godwin from './containers/Godwin';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

ReactDOM.render(<Godwin />, document.getElementById('Godwin'));
registerServiceWorker();