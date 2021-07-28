import './InputBoxEnter.css'
import React, {useState} from 'react';
import {updateGlobalToDoItem} from '../Redux/actions';
import {useSelector,useDispatch} from 'react-redux';
import DateTimePicker from 'react-datetime-picker';

function InputBoxEnter(props){
    const dispatch=useDispatch();
    const globalstate=useSelector(state=>state.globalToDoReducer);
    const [getDate,setDate]=useState(new Date());
    const [getTask,setTask]=useState();
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(getTask!=""){
            dispatch(updateGlobalToDoItem([...globalstate,{id:Math.random(),date:getDate,task:getTask,done:false}]));     
        }
        setTask("");
        setDate(new Date());
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
