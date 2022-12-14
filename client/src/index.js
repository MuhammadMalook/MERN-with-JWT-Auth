import React from 'react'
import ReactDOM from 'react-dom';
import App from './app'
// import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux";
import store from './redux/store';
ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'))
