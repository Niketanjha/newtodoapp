import './App.css';
import React, {useState,useEffect} from 'react';
import Modal from 'react-modal';
import ContentCards from './Components/ContentCards'
import InputBoxEnter from './Components/InputBoxEnter';
import CardSwitchButton from './Components/CardSwitchButton';
// import "bootstrap-icons/font/bootstrap-icons.css";


import {addGlobalToDoItem, deleteGlobalToDoItem, 
        updateGlobalToDoItem, getGlobalToDoItem,
        addLocalToDoItem, updateLocalToDoItem,
        set_Total_Task, set_Active_Tab,
        setModalIsOpen, set_Temp_Index} from './Redux/actions';
import store from './Redux/store.js';
import {useSelector,useDispatch} from 'react-redux';
import { setTempIndex } from './Redux/reducers/reducers';

Modal.setAppElement("#root");   

function App() {
  const dispatch =useDispatch();
  const globalstate=useSelector(state=>state.globalToDoReducer);
  const localstate=useSelector(state=>state.localToDoReducer);
  const acttab=useSelector(state=>state.setActiveTab);
  const tempIndex=useSelector(state=>state.setTempIndex);
  const modalState=useSelector(state=>state.ModalIsOpen);   
  const [modalIsOpen, setIsOpen] = React.useState(false);
  dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length));

  console.log("function app rendered");
  //////////////////////Functions for modals 
  function openModal(i) {
    setIsOpen(true);
    dispatch(set_Temp_Index(i));
    console.log("rightnow i:",i,globalstate);
  }
  function afterOpenModal() { 
  }
   function closeModal() {
    setIsOpen(false);
  }
/////////////////////////////////////////////////////////////////
  function activeTab(){
    
    let tempArray1=globalstate.filter(obj=>!obj.done);
    dispatch(updateLocalToDoItem(tempArray1));
    dispatch(set_Active_Tab(2));
    // dispatch(set_Total_Task(globalstate.filter(o=>!o.done).length));
  };
  function completedTab(){
      let tempArray1=(globalstate).filter(o=>o.done)
      dispatch(updateLocalToDoItem(tempArray1));
      dispatch(set_Active_Tab(3));
      dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length));
      const temp=globalstate;
      // dispatch(set_Total_Task((temp.filter(o=>!o.done)).length));     
    };
  function allTab(){
    dispatch(updateLocalToDoItem([...globalstate]));
    dispatch(set_Active_Tab(1));
    // dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length));
  };
////////////////////////////////////////////////////////////////////////////////////////
  function checkChange(i){
    console.log(i);
    if(acttab===1){
      let tempArray1=[...globalstate];
      console.log(tempArray1,i);  
      tempArray1[i].done=!(tempArray1[i].done);
      dispatch(updateGlobalToDoItem([...tempArray1]));
      // dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length)); 
      dispatch(updateLocalToDoItem([...globalstate]));
      console.log("Active tab is 1");
    }
    else if(acttab===2){
      console.log("Active tab is 2");
      let tempArray0=[...globalstate];
      const temp1=localstate[i].id;
        tempArray0.filter((o,i)=>{
          if(o.id===temp1){
            o.done=!o.done;
          }});
      dispatch(updateGlobalToDoItem(tempArray0));
      let tempArray2=(globalstate).filter(obj=>!obj.done);      
      dispatch(updateLocalToDoItem(tempArray2));
      // dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length)); 
    }
    else{ /*else for Active tab 3*/
      console.log("Active tab is 3");
      let tempArray0=[...globalstate];
      const temp1=localstate[i].id;
       tempArray0.filter((o,i)=>{
        if(o.id===temp1){
          o.done=!o.done;
        }});
      dispatch(updateGlobalToDoItem(tempArray0));
      let tempArray2=(globalstate).filter(obj=>obj.done);      
      dispatch(updateLocalToDoItem(tempArray2));
      // dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length)); 
    }
  }; 
    
  function deleteButton(direct){    
    if(acttab===1){
      let i=tempIndex;
      console.log("tab1 clicked and i is:",i);
      let tempArray0=globalstate;
      let tempArray=[...tempArray0.slice(0,i),...tempArray0.slice(i+1)];
      dispatch(updateLocalToDoItem(tempArray));
      dispatch(updateGlobalToDoItem(tempArray));
      // dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length)); 
      setIsOpen(false);
    }
    
    else if(acttab===2){
      let i=tempIndex;
      console.log("Active tab is 2");
      let tempArray2=[...globalstate];
      const temp=localstate[i].id;
      tempArray2.filter((o,n)=>{  
        if(o.id===temp){
          let tempArray=[...tempArray2.slice(0,n),...tempArray2.slice(n+1)];
          console.log("id===temp found and o,n,temparray is",o,n,tempArray);
          tempArray2=[...tempArray];
          console.log(tempArray2);
        }});
      console.log("outing",tempArray2);
      dispatch(updateGlobalToDoItem(tempArray2));
      let tempArray1=tempArray2.filter(obj=>!obj.done);
      dispatch(updateLocalToDoItem(tempArray1));
      // dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length)); 
      setIsOpen(false);
    }
    else{
      let i=direct; 
      console.log("Active tab is 3");
      let tempArray=[...globalstate];
      console.log("Local task list and i is:",localstate,i);
      const temp=localstate[i].id;
      tempArray.filter((o,n)=>{
        if(o.id===temp){
          let tempArray1=[...tempArray.slice(0,n),...tempArray.slice(n+1)];
          console.log("id===temp found and o,n,temparray is",o,n,tempArray1);
          tempArray=[...tempArray1];
          console.log(tempArray);
        }});
      console.log(tempArray);
      dispatch(updateGlobalToDoItem(tempArray));
      let tempArray2=tempArray.filter(obj=>obj.done);
      dispatch(updateLocalToDoItem(tempArray2));
      // dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length)); 
      setModalIsOpen(false);
    }
    
    
  }
/////////////////////////////////////////////////////////////////////////////////////////
  return(
    <div className="mainClass">
      <div className="mainBox">
        <div className="divh1">
          <i class="fa fa-check bg-primary text-white rounded p-4"></i>
          <h1>Todo App</h1>
        </div>  
        
        <InputBoxEnter 
          completedTab={completedTab}
        />
        
        <ContentCards 
          checkChange={checkChange}
          deleteButton={deleteButton}
          openModal={openModal} 
        />
        <CardSwitchButton 
          allTab={allTab}
          activeTab={activeTab}
          completedTab={completedTab}
        />
      </div>

      <Modal
          isOpen={modalIsOpen} onAfterOpen={afterOpenModal} 
          onRequestClose={closeModal} 
          overlayClassName="overlayModal"
          style={{
            content:{top:'50%',left: '50%',right: 'auto',bottom: 'auto',
              marginRight: '0%',transform: 'translate(-50%, -50%)',},
            overlay:{
              width:'30%',top:'50%',left: '50%',right: 'auto',
              bottom: 'auto',backgroundColor:'red',              
            }, 
          }} 
          contentLabel="Example Modal"> 
          <div><span className="buttonText">Are you confirm?</span></div>
          <button className="delButton" onClick={closeModal}><span className="buttonText">Cancel</span></button>
          <button className="delButton" onClick={deleteButton}><span className="buttonText">Delete</span></button>      
      </Modal> 
    </div>
  );
}

export default App;
