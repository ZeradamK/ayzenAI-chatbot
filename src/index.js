import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/Store/store';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {AuthProvider} from "./context/authContext";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);