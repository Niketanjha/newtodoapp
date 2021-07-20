import './InputBoxEnter.css'
import React, {useState} from 'react';
import {addGlobalToDoItem, addLocalToDoItem, set_Total_Task, updateGlobalToDoItem, updateLocalToDoItem} from '../Redux/actions';
import {useSelector,useDispatch} from 'react-redux';
import store from '../Redux/store';

//props= getActiveTab, setGlobalTaskList,getGlobalTaskList,setTotalTask,
//setLocalTaskList,getLocalTaskList,

function InputBoxEnter(props){
    const dispatch=useDispatch();
    return(
        <>
        <input className="enterBox" type="text"
            onKeyPress={(event)=>{
            if(event.key=="Enter"){
                event.preventDefault();
                if(event.target.value!=""){
                    if(store.getState.set_Active_Tab=="3"){
                        dispatch(updateGlobalToDoItem([...store.getState().globalToDoReducer,{id:Math.random(),task:event.target.value,done:false}]));
                        // props.setGlobalTaskList([...props.getGlobalTaskList,{id:Math.random(),task:event.target.value,done:false,hover:'none'}]);  
                        // props.setTotalTask((props.getGlobalTaskList.filter(o=>!o.done)).length); 
                        dispatch(set_Total_Task(store.getState().globalToDoReducer.filter(o=>!o.done).length));
                    }
                    else{
                        // props.setGlobalTaskList([...props.getGlobalTaskList,{id:Math.random(),task:event.target.value,done:false,hover:'none'}]);
                        dispatch(updateGlobalToDoItem([...store.getState().globalToDoReducer,{id:Math.random(),task:event.target.value,done:false}]));
                        // props.setLocalTaskList([...props.getLocalTaskList,{id:Math.random(),task:event.target.value,done:false,hover:'none'}]);
                        dispatch(addLocalToDoItem({id:Math.random(),task:event.target.value,done:false}));
                        // props.setTotalTask((props.getGlobalTaskList.filter(o=>!o.done)).length); 
                        dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length)); 
                    }              
                }
                event.currentTarget.value = "";
            }
            }} placeholder="What needs to be done?"></input>
        </>
    );
}

export default InputBoxEnter; 
