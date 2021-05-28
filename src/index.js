import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import {AuthProvider} from "./user/auth/AuthProvider";
import {useAuthService} from "./user/auth/AuthService";


ReactDOM.render(
    <BrowserRouter>
            <AuthProvider>
                <ReactNotification/>
                <App/>
            </AuthProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
