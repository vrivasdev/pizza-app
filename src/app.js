import React from 'react';
import { render } from 'react-dom';
import Home from './containers/home';
import data from './api.json';
import { Provider } from 'react-redux';
import store from './store';

render(
    <Provider store={store}>
        <Home data={data}/>
    </Provider>, 
    document.getElementById('app')
);