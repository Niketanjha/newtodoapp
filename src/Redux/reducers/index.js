import {combineReducers} from 'redux';
import {globalToDoReducer,localToDoReducer
    ,totalTaskReducer,setActiveTab,
    modalIsOpen,setTempIndex} from './reducers';

export default combineReducers(
    {globalToDoReducer,localToDoReducer
    ,totalTaskReducer,setActiveTab,
    modalIsOpen,setTempIndex}
);