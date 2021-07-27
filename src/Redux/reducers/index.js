import {combineReducers} from 'redux';
import {globalToDoReducer,localToDoReducer
    ,totalTaskReducer,setActiveTab,
    modalIsOpen,setTempIndex,localStorageReducer} from './reducers';

export default combineReducers(
    {globalToDoReducer,localToDoReducer
    ,totalTaskReducer,setActiveTab,localStorageReducer,
    modalIsOpen,setTempIndex}
);