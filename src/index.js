import React from 'react';
import ReactDOM from 'react-dom';

import './css/Globals.css';
// import './css/animate.css';

import Godwin from './containers/Godwin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Godwin />, document.getElementById('Godwin'));
registerServiceWorker();