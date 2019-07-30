import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios'

axios.interceptors.request.use(request => {
    console.log(request);
    // edit request config
    return request
}, error => {
    console.log(error);
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response
}, error => {
    console.log(error);
    return Promise.reject(error)
})

axios.defaults.baseURL='http://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization']='AUTH TOKEN'

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
