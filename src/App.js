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
  /*
  const [getGlobalTaskList,setGlobalTaskList]=useState([]);
  const [getLocalTaskList,setLocalTaskList]=useState([...getGlobalTaskList]);
  const [getTotalTask,setTotalTask]=useState(0);
  const [getActiveTab,setActiveTab]=useState(1);
  const [getStyle,setStyle]=useState({display:'none'});
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [getTempIndex,setTempIndex]=useState();
  */
  
  const petCounter=useSelector((state)=> {console.log('useselectorstate',state.localToDoReducer);return state.addTodo});
  console.log("function app rendered");
  //////////////////////Functions for modals 
  function openModal(i) {
    // setIsOpen(true);
    dispatch(setModalIsOpen(true));
    // setTempIndex(i);
    dispatch(setModalIsOpen(true));
    
    console.log("rightnow i:",i,store.getState().globalToDoReducer);
  }
  function afterOpenModal() { 
  }
   function closeModal() {
    // setIsOpen(false);
    dispatch(setModalIsOpen(false));
  }
/////////////////////////////////////////////////////////////////
  function activeTab(){
    // let tempArray=getGlobalTaskList.filter(obj=>!obj.done);
/*redux*/let tempArray1=store.getState().globalToDoReducer.filter(obj=>!obj.done);
    // setLocalTaskList(tempArray);
    dispatch(updateLocalToDoItem(tempArray1));
    // setActiveTab(2);
    dispatch(set_Active_Tab(2));
    // setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length); 
/*redux*/ dispatch(set_Total_Task(store.getState().globalToDoReducer.filter(o=>!o.done).length));
  };
  function completedTab(){
    // let tempArray=getGlobalTaskList.filter(obj=>obj.done)
/*redux*/ let tempArray1=(store.getState().globalToDoReducer).filter(o=>o.done)
    // setLocalTaskList(tempArray);
    dispatch(updateLocalToDoItem(tempArray1));
    // setActiveTab(3);
    dispatch(set_Active_Tab(3));
    // setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length);
/*redux*/dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length));
    const temp=store.getState().globalToDoReducer;
/*redux*/ dispatch(set_Total_Task((temp.filter(o=>!o.done)).length));     
  };
  function allTab(){
    // setLocalTaskList([...getGlobalTaskList]);
/*redux*/ dispatch(updateLocalToDoItem([...store.getState().globalToDoReducer]))
    // setActiveTab(1);
    dispatch(set_Active_Tab(1));
    // setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length); 
    /*redux*/dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length));
  };
////////////////////////////////////////////////////////////////////////////////////////
  function checkChange(i){
    console.log(i);
    if(store.getState.setActiveTab===1){
      // let tempArray=[...getGlobalTaskList];
/*redux*/let tempArray1=[...store.getState().globalToDoReducer];
      console.log(tempArray1,i);  
      // tempArray[i].done=!(tempArray[i].done);
/*redux*/tempArray1[i].done=!(tempArray1[i].done);
      // setGlobalTaskList([...tempArray]);
/*redux*/dispatch(updateGlobalToDoItem([...tempArray1]));
      // setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length);
/*redux*/dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length)); 
      // setLocalTaskList(([...getGlobalTaskList]));
/*redux*/dispatch(updateLocalToDoItem([...store.getState().globalToDoReducer]));
      console.log("Active tab is 1");
    }
    else if(store.getState.setActiveTab===2){
      console.log("Active tab is 2");
      // let tempArray=[...getGlobalTaskList];
/*redux*/let tempArray0=[...store.getState().globalToDoReducer];
      // const temp=getLocalTaskList[i].id;
      const temp1=store.getState().localToDoReducer[i].id;
      // tempArray.filter((o,i)=>{
      //   if(o.id===temp){
      //     o.done=!o.done;
      //   }});
/*redux*/tempArray0.filter((o,i)=>{
          if(o.id===temp1){
            o.done=!o.done;
          }});
      // setGlobalTaskList(tempArray);
/*redux*/ dispatch(updateGlobalToDoItem(tempArray0));
      // let tempArray1=getGlobalTaskList.filter(obj=>!obj.done);
/*redux*/ let tempArray2=(store.getState().globalToDoReducer).filter(obj=>!obj.done);      
      // setLocalTaskList(tempArray1);
/*redux*/dispatch(updateLocalToDoItem(tempArray2));
      // setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length); 
/*redux*/dispatch(set_Total_Task((store.getState().globalToDoReducer).filter(o=>!o.done).length)); 
    }
    else{ /*else for Active tab 3*/
      console.log("Active tab is 3");
      // let tempArray=[...getGlobalTaskList];
/*redux*/let tempArray0=[...store.getState().globalToDoReducer];
      // const temp=getLocalTaskList[i].id;
/*redux*/ const temp1=store.getState().localToDoReducer[i].id;
      // tempArray.filter((o,i)=>{
      //   if(o.id===temp){
      //     o.done=!o.done;
      //   }});
/*redux*/ tempArray0.filter((o,i)=>{
        if(o.id===temp1){
          o.done=!o.done;
        }});
      // setGlobalTaskList(tempArray);
/*redux*/ dispatch(updateGlobalToDoItem(tempArray0));
      // let tempArray1=getGlobalTaskList.filter(obj=>obj.done);
/*redux*/let tempArray2=(store.getState().globalToDoReducer).filter(obj=>obj.done);      
      // setLocalTaskList(tempArray1);
/*redux*/dispatch(updateLocalToDoItem(tempArray2));
      // setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length); 
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
    // if(getActiveTab===1){
    //   let i=getTempIndex;
    //   console.log("tab1 clicked and i is:",i);
    //   let tempArray=[...getGlobalTaskList.slice(0,i),...getGlobalTaskList.slice(i+1)];
    //   setLocalTaskList(tempArray);
    //   setGlobalTaskList(tempArray);
    //   setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length);    
    //   dispatch(deleteGlobalToDoItem(i));
    //   setIsOpen(false);
    // }
    
    // else if(getActiveTab===2){
    //   let i=getTempIndex;
    //   console.log("Active tab is 2");
    //   let tempArray2=[...getGlobalTaskList];
    //   const temp=getLocalTaskList[i].id;
    //   tempArray2.filter((o,n)=>{
    //     if(o.id===temp){
    //       let tempArray=[...tempArray2.slice(0,n),...tempArray2.slice(n+1)];
    //       console.log("id===temp found and o,n,temparray is",o,n,tempArray);
    //       tempArray2=[...tempArray]
    //       console.log(tempArray2);
    //     }});
    //   console.log("outing",tempArray2);
    //   setGlobalTaskList(tempArray2);
    //   let tempArray1=tempArray2.filter(obj=>!obj.done);
    //   setLocalTaskList(tempArray1);
    //   setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length);     
    //   setIsOpen(false);    
    // }
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
    
    // else{
    //   let i=direct; 
    //   console.log("Active tab is 3");
    //   let tempArray=[...getGlobalTaskList];
    //   console.log("Local task list and i is:",getLocalTaskList,i);
    //   const temp=getLocalTaskList[i].id;
    //   tempArray.filter((o,n)=>{
    //     if(o.id===temp){
    //       let tempArray1=[...tempArray.slice(0,n),...tempArray.slice(n+1)];
    //       console.log("id===temp found and o,n,temparray is",o,n,tempArray1);
    //       tempArray=[...tempArray1];
    //       console.log(tempArray);
    //     }});
    //   console.log(tempArray);
    //   setGlobalTaskList(tempArray);
    //   let tempArray2=tempArray.filter(obj=>obj.done);
    //   setLocalTaskList(tempArray2);
    //   setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length);
    //   setIsOpen(false); 
    // }
    
  }
/////////////////////////////////////////////////////////////////////////////////////////
  return(
    <div className="mainClass">
      <div className="mainBox">
        <div className="divh1">
          <h1>Todo App</h1>
        </div>  
        <InputBoxEnter />
        {/* <InputBoxEnter 
          getActiveTab={store.getState().getActiveTab}
          getLocalTaskList={getLocalTaskList}
          getGlobalTaskList={getGlobalTaskList}
          setGlobalTaskList={setGlobalTaskList}
          setTotalTask={setTotalTask}
          setLocalTaskList={setLocalTaskList}
        /> */}
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
