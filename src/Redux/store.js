import {createStore} from 'redux';
import reducer from './reducers/index';

let store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());   //petCounter is reducer. 

store.subscribe(()=>{
    console.log("dispatchiscalled & storestate:",store.getState());
}); 

export default store; 
