import {combineReducers} from 'redux';
import {globalToDoReducer
    ,totalTaskReducer,setActiveTab,
    modalIsOpen,setTempIndex} from './reducers';

export default combineReducers(
    {globalToDoReducer
    ,totalTaskReducer,setActiveTab,
    modalIsOpen,setTempIndex}
);