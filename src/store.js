import {createStore, combineReducers} from "redux";
import menuReducer from './reducers/menuReducer';

export default createStore (
    combineReducers({
        menu: menuReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);