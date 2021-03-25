import React, {Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import rootReducer from "./redux/rootReducer";


const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(
    app,
    document.getElementById('root')
)