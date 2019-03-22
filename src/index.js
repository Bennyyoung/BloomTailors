import React from 'react';
import ReactDOM from 'react-dom';
// For Material design Lite UI
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'

// For ant design UI
import 'antd/dist/antd.css';
import 'antd/dist/antd.js';

// Footer from mdbreact
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
