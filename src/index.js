import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import storeManager from './Store/store-manager';
import initialState from './Store/initialState';

const store = createStore(storeManager, initialState);
const rootElement = document.getElementById('root');
let failedAuth = false;
window.gm_authFailure = () => {
    failedAuth = true;
}


ReactDOM.render((
    <Provider store={store}>
        <App
            authSuccess = {failedAuth}
        />
    </Provider>
), rootElement);


serviceWorker.register('./src/App.js');
