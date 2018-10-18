import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ControlReducer from './reducers/control';

import './App.css';
// import '../public/favicon.ico'
// import '../public/manifest.json';

const store = createStore(
    ControlReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Container /> 
    </Provider>,

    document.getElementById('root')
);
