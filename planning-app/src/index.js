import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store, {rrfProps} from "./Redux/Store";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";


ReactDOM.render(<HashRouter basename={process.env.PUBLIC_URL}><Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App/>
    </ReactReduxFirebaseProvider>
</Provider></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
