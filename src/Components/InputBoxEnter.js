import './InputBoxEnter.css'
import React, {useEffect, useState} from 'react';
import {addGlobalToDoItem, addLocalToDoItem, addLocalStorage,set_Total_Task, updateGlobalToDoItem, updateLocalToDoItem} from '../Redux/actions';
import {useSelector,useDispatch} from 'react-redux';
import store from '../Redux/store';
import DateTimePicker from 'react-datetime-picker';
import { DateTimePicker as DateTimePicker1}  from "react-tempusdominus-bootstrap";
import moment from 'moment';



function InputBoxEnter(props){
    const dispatch=useDispatch();
    const globalstate=useSelector(state=>state.globalToDoReducer);
    const localstate=useSelector(state=>state.localToDoReducer);
    const actvTab=useSelector(state=>state.setActiveTab);
    const [getDate,setDate]=useState(new Date());
    const [getTask,setTask]=useState();
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(getTask);
        if(getTask!=""){
            if(actvTab=="3"){
                dispatch(updateGlobalToDoItem([...globalstate,{id:Math.random(),date:getDate,task:getTask,done:false}]));
            }
            else{
                dispatch(updateGlobalToDoItem([...globalstate,{id:Math.random(),date:getDate,task:getTask,done:false}]));
                dispatch(addLocalToDoItem({id:Math.random(),date:getDate,task:getTask,done:false}));
            }
            console.log(globalstate);           
        }
        setTask("");
        setDate(new Date());
        dispatch(addLocalStorage([...globalstate,{id:Math.random(),date:getDate,task:getTask,done:false}]));
    }
    return(
        <div >
            <form className="inputBox" onSubmit={handleSubmit}>
                    <input className="" 
                        id="enterBox"  type="text" required={true}
                        onChange={(event)=>{
                            setTask(event.target.value);
                        }}
                        value={getTask} placeholder="What needs to be done?"
                    >    
                    </input>
                    <div className="secondBox">
                        <DateTimePicker 
                            style={{backgroundColor:"white"}}                        
                            className="datePicker"
                            onChange={setDate}
                            value={getDate}
                            disableClock={false}
                            required={true}       
                        />
                        <button type="submit"  id="addButton"> 
                            <span className="addTaskText">Add Task</span>
                        </button>
                    </div>
                    
            </form>
        </div>
    );
}

export default InputBoxEnter; 
