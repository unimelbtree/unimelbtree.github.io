import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from "react-router-dom";

import './index.css';
import App from './App';

ReactDOM.render(
    <HashRouter basename={"/"}>
        <App />
    </HashRouter>,
    document.getElementById('root')
);