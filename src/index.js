import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import {createBrowserHistory} from "history";


export const History = createBrowserHistory()

ReactDOM.render(
    <BrowserRouter>
                <ReactNotification/>
                <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
