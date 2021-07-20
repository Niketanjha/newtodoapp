import './App.css';
import React, {useState,useEffect} from 'react';
import Modal from 'react-modal';
import ContentCards from './Components/ContentCards'
import InputBoxEnter from './Components/InputBoxEnter';
import CardSwitchButton from './Components/CardSwitchButton';

import {addGlobalToDoItem, deleteGlobalToDoItem, 
        updateGlobalToDoItem, getGlobalToDoItem,
        addLocalToDoItem, updateLocalToDoItem,
        set_Total_Task, set_Active_Tab,
        setModalIsOpen, set_Temp_Index} from './Redux/actions';
import store from './Redux/store.js';
import {useSelector,useDispatch} from 'react-redux';

Modal.setAppElement("#root");   

function App() {
  const dispatch =useDispatch();
  dispatch(updateLocalToDoItem([...store.getState().localToDoReducer]));
  dispatch(updateGlobalToDoItem([...store.getState().globalToDoReducer]))
  
  const petCounter=useSelector((state)=> {console.log('useselectorstate',state.localToDoReducer);return state.addTodo});
  console.log("function app rendered");
  //////////////////////Functions for modals 
  function openModal(i) {
    dispatch(setModalIsOpen(true));
    dispatch(setModalIsOpen(true));
    console.log("rightnow i:",i,store.getState().globalToDoReducer);
  }
  function afterOpenModal() { 
  }
   function closeModal() {
    dispatch(setModalIsOpen(false));
  }
/////////////////////////////////////////////////////////////////
  function activeTab(){
    
    let tempArray1=store.getState().globalToDoReducer.filter(obj=>!obj.done);
    dispatch(updateLocalToDoItem(tempArray1));
    dispatch(set_Active_Tab(2));
    dispatch(set_Total_Task(store.getState().globalToDoReducer.filter(o=>!o.done).length));
  };
  function completedTab(){
 let tempArray1=(store.getState().globalToDoReducer).filter(o=>o.done)
    dispatch(updateLocalToDoItem(tempArray1));
    dispatch(set_Active_Tab(3));
/*redux*/dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length));
    const temp=store.getState().globalToDoReducer;
/*redux*/ dispatch(set_Total_Task((temp.filter(o=>!o.done)).length));     
  };
  function allTab(){
/*redux*/ dispatch(updateLocalToDoItem([...store.getState().globalToDoReducer]))
    dispatch(set_Active_Tab(1));
    /*redux*/dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length));
  };
////////////////////////////////////////////////////////////////////////////////////////
  function checkChange(i){
    console.log(i);
    if(store.getState.setActiveTab===1){
/*redux*/let tempArray1=[...store.getState().globalToDoReducer];
      console.log(tempArray1,i);  
/*redux*/tempArray1[i].done=!(tempArray1[i].done);
/*redux*/dispatch(updateGlobalToDoItem([...tempArray1]));
/*redux*/dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length)); 
/*redux*/dispatch(updateLocalToDoItem([...store.getState().globalToDoReducer]));
      console.log("Active tab is 1");
    }
    else if(store.getState.setActiveTab===2){
      console.log("Active tab is 2");
/*redux*/let tempArray0=[...store.getState().globalToDoReducer];
      const temp1=store.getState().localToDoReducer[i].id;
/*redux*/tempArray0.filter((o,i)=>{
          if(o.id===temp1){
            o.done=!o.done;
          }});
/*redux*/ dispatch(updateGlobalToDoItem(tempArray0));
/*redux*/ let tempArray2=(store.getState().globalToDoReducer).filter(obj=>!obj.done);      
/*redux*/dispatch(updateLocalToDoItem(tempArray2));
/*redux*/dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length)); 
    }
    else{ /*else for Active tab 3*/
      console.log("Active tab is 3");
/*redux*/let tempArray0=[...store.getState().globalToDoReducer];
/*redux*/ const temp1=store.getState().localToDoReducer[i].id;
/*redux*/ tempArray0.filter((o,i)=>{
        if(o.id===temp1){
          o.done=!o.done;
        }});
/*redux*/ dispatch(updateGlobalToDoItem(tempArray0));
/*redux*/let tempArray2=(store.getState().globalToDoReducer).filter(obj=>obj.done);      
/*redux*/dispatch(updateLocalToDoItem(tempArray2));
/*redux*/dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length)); 
    }
  }; 
    
  function deleteButton(direct){    
    if(store.getState().setActiveTab===1){
      let i=store.getState().setTempIndex;
      console.log("tab1 clicked and i is:",i);
      let tempArray0=store.getState().globalToDoReducer;
      let tempArray=[...tempArray0.slice(0,i),...tempArray0.slice(i+1)];
      dispatch(updateLocalToDoItem(tempArray));
      dispatch(updateGlobalToDoItem(tempArray));
      dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length)); 
      dispatch(deleteGlobalToDoItem(i));
      dispatch(setModalIsOpen(false));
    }
    
    else if(store.getState().setActiveTab===2){
      let i=store.getState().setTempIndex;
      console.log("Active tab is 2");
      let tempArray2=[...store.getState().globalToDoReducer];
      const temp=store.getState().localToDoReducer[i].id;
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
      dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length)); 
      dispatch(setModalIsOpen(false));
    }
    else{
      let i=direct; 
      console.log("Active tab is 3");
      let tempArray=[...store.getState().globalToDoReducer];
      console.log("Local task list and i is:",store.getState().localToDoReducer,i);
      const temp=store.getState().localToDoReducer[i].id;
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
      dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length)); 
      dispatch(setModalIsOpen(false));
    }
    
    
  }
/////////////////////////////////////////////////////////////////////////////////////////
  return(
    <div className="mainClass">
      <div className="mainBox">
        <div className="divh1">
          <h1>Todo App</h1>
        </div>  
        <InputBoxEnter />
        
        <ContentCards 
          getActiveTab={store.getState().setActiveTab}
          getLocalTaskList={store.getState().localToDoReducer}
          getGlobalTaskList={store.getState().globalToDoReducer}
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
          isOpen={store.getState().ModalIsOpen} onAfterOpen={afterOpenModal} 
          onRequestClose={closeModal} 
          style={{
            content:{top:'50%',left: '50%',right: 'auto',bottom: 'auto',
              marginRight: '0%',transform: 'translate(-50%, -50%)',},
            overlay:{
              width:'20%',top:'50%',left: '50%',right: 'auto',
              bottom: 'auto',backgroundColor:'red',              
            }, 
          }} 
          contentLabel="Example Modal"> 
          <div>Are you confirm?</div>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={deleteButton}>Delete</button>      
      </Modal> 
    </div>
  );
}

export default App;
