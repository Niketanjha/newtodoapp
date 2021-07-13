import './InputBoxEnter.css'
import React, {useState} from 'react';

//props= getActiveTab, setGlobalTaskList,getGlobalTaskList,setTotalTask,
//setLocalTaskList,getLocalTaskList,
function InputBoxEnter(props){
    return(
        <>
        <input className="enterBox" type="text"
            onKeyPress={(event)=>{
            if(event.key=="Enter"){
                event.preventDefault();
                if(event.target.value!=""){
                if(props.getActiveTab=="3"){
                    props.setGlobalTaskList([...props.getGlobalTaskList,{id:Math.random(),task:event.target.value,done:false,hover:'none'}]);  
                    props.setTotalTask((props.getGlobalTaskList.filter(o=>!o.done)).length); 
                }
                else{
                    props.setGlobalTaskList([...props.getGlobalTaskList,{id:Math.random(),task:event.target.value,done:false,hover:'none'}]);
                    props.setLocalTaskList([...props.getLocalTaskList,{id:Math.random(),task:event.target.value,done:false,hover:'none'}]);
                    props.setTotalTask((props.getGlobalTaskList.filter(o=>!o.done)).length); 
                }              
                }
                event.currentTarget.value = "";
            }
            }} placeholder="What needs to be done?"></input>
        </>
    );
}

export default InputBoxEnter; 
