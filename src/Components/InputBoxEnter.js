import './InputBoxEnter.css'
import React, {useEffect, useState} from 'react';
import {addGlobalToDoItem, addLocalToDoItem, set_Total_Task, updateGlobalToDoItem, updateLocalToDoItem} from '../Redux/actions';
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
            console.log(globalstate)
            localStorage.setItem('newGlobalState',JSON.stringify(globalstate));              
        }
        setTask("");
        setDate(new Date());
    }
    return(
        <div >
        {/* <div class="row m-1 p-1">
            <div class="col col-11 mx-auto">
                <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                    <div class="col">
                        <input class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new Item">
                        </input>
                    </div>
                    <DateTimePicker1 
                            
                            onChange={e => setDate(e.date)}
                            date={getDate}
                        />
                    <div class="col-auto px-0 mx-0 mr-2">
                        <button type="button" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <i class="bi bi-bullseye"></i> */}

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
                        
                            {/* <DateTimePicker1 
                                className="datePicker1"
                                onChange={e => setDate(e.date)}
                                date={getDate}
                            /> */}
                        
                            {/* <button type="submit" className="addButton"><span className="addButtonText">Add
                            </span></button> */}

                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cursor fontIcon" viewBox="0 0 16 16">
                                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
                            </svg> */}
                    </div>
                    
            </form>
        </div>
    );
}

export default InputBoxEnter; 
