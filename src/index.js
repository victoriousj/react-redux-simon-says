import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import ControlReducer from './reducers/control';

const store = createStore(
    ControlReducer
);

ReactDOM.render(
    <Provider store={store}>
        <Container /> 
    </Provider>,

    document.getElementById('root')
);
