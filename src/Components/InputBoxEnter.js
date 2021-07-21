import './InputBoxEnter.css'
import React, {useState} from 'react';
import {addGlobalToDoItem, addLocalToDoItem, set_Total_Task, updateGlobalToDoItem, updateLocalToDoItem} from '../Redux/actions';
import {useSelector,useDispatch} from 'react-redux';
import store from '../Redux/store';
import DateTimePicker from 'react-datetime-picker';


function InputBoxEnter(props){
    const dispatch=useDispatch();
    const globalstate=useSelector(state=>state.globalToDoReducer);
    const localstate=useSelector(state=>state.localToDoReducer);
    const actvTab=useSelector(state=>state.setActiveTab);
    console.log(actvTab);
    const [getDate,setDate]=useState(new Date());
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(event.target);
    }
    return(
        <div >
            <form className="inputBox" onSubmit={handleSubmit}>
                <input className="enterBox" type="text"
                    onKeyPress={(event)=>{
                    if(event.key=="Enter"){
                        event.preventDefault();
                        if(event.target.value!=""){
                            if(actvTab=="3"){
                                dispatch(updateGlobalToDoItem([...globalstate,{id:Math.random(),task:event.target.value,done:false}]));
                                // dispatch(set_Total_Task(globalstate.filter(o=>!o.done).length));
                            }
                            else{
                                dispatch(updateGlobalToDoItem([...globalstate,{id:Math.random(),task:event.target.value,done:false}]));
                                dispatch(addLocalToDoItem({id:Math.random(),task:event.target.value,done:false}));
                                // dispatch(set_Total_Task(globalstate.filter(o=>!o.done).length)); 
                            }              
                        }
                        event.currentTarget.value = "";
                    }
                    }} placeholder="What needs to be done?"></input>
                    <div className="dateAndSubmit">
                        <DateTimePicker 
                            onChange={setDate}
                            value={getDate}
                        />
                        <button type="submit" className="addButton">Add</button>
                    </div>
            </form>
        </div>
    );
}

export default InputBoxEnter; 
