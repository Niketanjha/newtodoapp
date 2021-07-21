import './InputBoxEnter.css'
import React, {useState} from 'react';
import {addGlobalToDoItem, addLocalToDoItem, set_Total_Task, updateGlobalToDoItem, updateLocalToDoItem} from '../Redux/actions';
import {useSelector,useDispatch} from 'react-redux';
import store from '../Redux/store';

function InputBoxEnter(props){
    const dispatch=useDispatch();
    const globalstate=useSelector(state=>state.globalToDoReducer);
    const localstate=useSelector(state=>state.localToDoReducer);
    const actvTab=useSelector(state=>state.set_Active_Tab);
    return(
        <>
        <input className="enterBox" type="text"
            onKeyPress={(event)=>{
            if(event.key=="Enter"){
                event.preventDefault();
                if(event.target.value!=""){
                    if(actvTab==="3"){
                        dispatch(updateGlobalToDoItem([...globalstate,{id:Math.random(),task:event.target.value,done:false}]));
                        dispatch(set_Total_Task(globalstate.filter(o=>!o.done).length));
                    }
                    else{
                        dispatch(updateGlobalToDoItem([...globalstate,{id:Math.random(),task:event.target.value,done:false}]));
                        dispatch(addLocalToDoItem({id:Math.random(),task:event.target.value,done:false}));
                        dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length)); 
                    }              
                }
                event.currentTarget.value = "";
            }
            }} placeholder="What needs to be done?"></input>
        </>
    );
}

export default InputBoxEnter; 
