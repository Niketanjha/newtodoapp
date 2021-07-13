import './App.css';
import React, {useState,useEffect} from 'react';
import Modal from 'react-modal';
import ContentCards from './Components/ContentCards'
import InputBoxEnter from './Components/InputBoxEnter';
import CardSwitchButton from './Components/CardSwitchButton';

Modal.setAppElement("#root");

function App() {
  const [getGlobalTaskList,setGlobalTaskList]=useState([]);
  const [getLocalTaskList,setLocalTaskList]=useState([...getGlobalTaskList]);
  const [getTotalTask,setTotalTask]=useState(0);
  const [getActiveTab,setActiveTab]=useState(1);
  const [getStyle,setStyle]=useState({display:'none'});
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [getTempIndex,setTempIndex]=useState();
  
//////////////////////Functions for modals 
  function openModal(i) {
    setIsOpen(true);
    setTempIndex(i);
    console.log("rightnow i:",i,getGlobalTaskList);
  }
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }
/////////////////////////////////////////////////////////////////
  function activeTab(){
    let tempArray=getGlobalTaskList.filter(obj=>!obj.done)
    setLocalTaskList(tempArray);
    setActiveTab(2);
    setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length); 
  };
  function completedTab(){
    let tempArray=getGlobalTaskList.filter(obj=>obj.done)
    setLocalTaskList(tempArray);
    setActiveTab(3);
    setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length);     
  };
  function allTab(){
    setLocalTaskList([...getGlobalTaskList]);
    setActiveTab(1);
    setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length); 
  };
////////////////////////////////////////////////////////////////////////////////////////
  function checkChange(i){
    console.log(i);
    if(getActiveTab===1){
      let tempArray=[...getGlobalTaskList];
      console.log(tempArray,i);  
      tempArray[i].done=!(tempArray[i].done);

      setGlobalTaskList([...tempArray]);
      setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length); 
      setLocalTaskList(([...getGlobalTaskList]));
      console.log("Active tab is 1");
    }
    else if(getActiveTab===2){
      console.log("Active tab is 2");
      let tempArray=[...getGlobalTaskList];
      const temp=getLocalTaskList[i].id;
      tempArray.filter((o,i)=>{
        if(o.id===temp){
          o.done=!o.done;
        }});
      setGlobalTaskList(tempArray);
      let tempArray1=getGlobalTaskList.filter(obj=>!obj.done);
      setLocalTaskList(tempArray1);
      setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length); 
    }
    else{
      console.log("Active tab is 2");
      let tempArray=[...getGlobalTaskList];
      const temp=getLocalTaskList[i].id;
      tempArray.filter((o,i)=>{
        if(o.id===temp){
          o.done=!o.done;
        }});
      setGlobalTaskList(tempArray);
      let tempArray1=getGlobalTaskList.filter(obj=>obj.done);
      setLocalTaskList(tempArray1);
      setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length); 
    }
  };
    
  function deleteButton(){
    let i=getTempIndex;
    if(getActiveTab===1){
      console.log("tab1 clicked and i is:",i);
      let tempArray=[...getGlobalTaskList.slice(0,i),...getGlobalTaskList.slice(i+1)];
      setLocalTaskList(tempArray);
      setGlobalTaskList(tempArray);
      setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length);    
      setIsOpen(false);
    }
    else if(getActiveTab===2){
      console.log("Active tab is 2");
      const temp=getLocalTaskList[i].id;
      getGlobalTaskList.filter((o,n)=>{
        if(o.id===temp){
          console.log("id===temp found and o,n is",o,n);
          let tempArray=[...getGlobalTaskList.slice(0,n),...getGlobalTaskList.slice(n+1)];
          setGlobalTaskList(tempArray);
        }});
      let tempArray1=getGlobalTaskList.filter(obj=>!obj.done);
      setLocalTaskList(tempArray1);
      setTotalTask((getGlobalTaskList.filter(o=>!o.done)).length); 
      setGlobalTaskList([...getGlobalTaskList]);
      setIsOpen(false);
      
    }
    
  }
/////////////////////////////////////////////////////////////////////////////////////////
  return(
    <div className="mainClass">
      <div className="mainBox">
        <div className="divh1">
          <h1>Todo App</h1>
        </div>
        <InputBoxEnter 
          getActiveTab={getActiveTab}
          getLocalTaskList={getLocalTaskList}
          getGlobalTaskList={getGlobalTaskList}
          setGlobalTaskList={setGlobalTaskList}
          setTotalTask={setTotalTask}
          setLocalTaskList={setLocalTaskList}
        />
        <ContentCards 
          getActiveTab={getActiveTab}
          setGlobalTaskList={setGlobalTaskList}
          getLocalTaskList={getLocalTaskList}
          checkChange={checkChange}
          setTempIndex={setTempIndex}
          deleteButton={deleteButton}
          openModal={openModal} 
        />
        <CardSwitchButton 
          getActiveTab={getActiveTab}
          allTab={allTab}
          activeTab={activeTab}
          completedTab={completedTab}
          getTotalTask={getTotalTask}

        />
      </div>

      <Modal
          isOpen={modalIsOpen} onAfterOpen={afterOpenModal} 
          onRequestClose={closeModal} 
          style={{
            top:"50%", left: '50%', right: 'auto', bottom: 'auto',
            marginRight:'-50%',
            transform: 'translate(-50%, -50%)'}} 
          contentLabel="Example Modal"> 
          <div>Are you confirm?</div>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={deleteButton}>Delete</button>      
      </Modal> 
    </div>
  );
}

export default App;
