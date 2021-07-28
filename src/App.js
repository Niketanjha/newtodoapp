import './App.css';
import React from 'react';
import Modal from 'react-modal';
import ContentCards from './Components/ContentCards'
import InputBoxEnter from './Components/InputBoxEnter';
import CardSwitchButton from './Components/CardSwitchButton';

import {updateGlobalToDoItem, set_Total_Task, set_Active_Tab,
        setModalIsOpen, set_Temp_Index} from './Redux/actions';
import {useSelector,useDispatch} from 'react-redux';
import { setTempIndex } from './Redux/reducers/reducers';

Modal.setAppElement("#root");   

function App() {
  const dispatch =useDispatch();
  const globalstate=useSelector(state=>state.globalToDoReducer);
  const acttab=useSelector(state=>state.setActiveTab);
  const tempIndex=useSelector(state=>state.setTempIndex);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  dispatch(set_Total_Task((globalstate).filter(o=>!o.done).length));
  
  function activeData(){
    return (globalstate.filter(obj=>!obj.done));
  }
  function completedData(){
    return (globalstate.filter(obj=>obj.done));
  }
 
  function openModal(i) {
    setIsOpen(true);
    dispatch(set_Temp_Index(i));
  }
  function afterOpenModal() { 
  }
   function closeModal() {
    setIsOpen(false);
  }

  function activeTab(){
    dispatch(set_Active_Tab(2));
  };
  function completedTab(){
      dispatch(set_Active_Tab(3));
    };
  function allTab(){
    dispatch(set_Active_Tab(1));
  };
  function checkChange(i){
    if(acttab===1){
      let tempArray1=[...globalstate];
      tempArray1[i].done=!(tempArray1[i].done);
      dispatch(updateGlobalToDoItem([...tempArray1]));
    }
    else if(acttab===2){
      let tempArray0=[...globalstate];
      let localstate1=activeData(tempArray0);
      const temp1=localstate1[i].id;
        tempArray0.filter((o,i)=>{
          if(o.id===temp1){
            o.done=!o.done;
          }});
      dispatch(updateGlobalToDoItem(tempArray0));
    }
    else{ /*else for Active tab 3*/
      let tempArray0=[...globalstate];
      let localstate1=completedData(tempArray0);
      const temp1=localstate1[i].id;
       tempArray0.filter((o,i)=>{
        if(o.id===temp1){
          o.done=!o.done;
        }});
      dispatch(updateGlobalToDoItem(tempArray0));
    }
  }; 
    
  function deleteButton(direct){    
    if(acttab===1){
      let i=tempIndex;
      let tempArray0=globalstate;
      let tempArray=[...tempArray0.slice(0,i),...tempArray0.slice(i+1)];
      dispatch(updateGlobalToDoItem(tempArray));
      setIsOpen(false);
    }
    else if(acttab===2){
      let i=tempIndex;
      let tempArray2=[...globalstate];
      let localstate1=activeData(tempArray2);
      const temp=localstate1[i].id;
      tempArray2.filter((o,n)=>{  
        if(o.id===temp){
          let tempArray=[...tempArray2.slice(0,n),...tempArray2.slice(n+1)];
          tempArray2=[...tempArray];
        }});
      dispatch(updateGlobalToDoItem(tempArray2));
      setIsOpen(false);
    }
    else{
      let i=direct; 
      let tempArray=[...globalstate];
      let localstate1=completedData(tempArray);
      const temp=localstate1[i].id;
      tempArray.filter((o,n)=>{
        if(o.id===temp){
          let tempArray1=[...tempArray.slice(0,n),...tempArray.slice(n+1)];
          tempArray=[...tempArray1];
        }});
      dispatch(updateGlobalToDoItem(tempArray));
      setModalIsOpen(false);
    }
  }

  return(
    <div className="mainClass">
      <div className="blueTopBar">
      </div>
      <div className="mainBox">      
        <InputBoxEnter 
          completedTab={completedTab}
        />
        
        <ContentCards 
          checkChange={checkChange}
          deleteButton={deleteButton}
          openModal={openModal} 
          activeData={activeData}
          completedData={completedData}
        />
      </div>
      <CardSwitchButton 
          allTab={allTab}
          activeTab={activeTab}
          completedTab={completedTab}
        />

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
