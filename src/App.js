import './App.css';
import React, {useState,useEffect} from 'react';

function App() {
  const [globalGetTaskList,globalSetTaskList]=useState([]);
  const [getLocalTaskList,setLocalTaskList]=useState([...globalGetTaskList]);
  const [getTotalTask,setTotalTask]=useState(0);
  const[getActiveTab,setActiveTab]=useState(1);
  const[getStyle,setStyle]=useState({display:'none'});
  
  
  function activeTab(){
    let tempArray=globalGetTaskList.filter(obj=>!obj.done)
    setLocalTaskList(tempArray);
    setActiveTab(2);
    setTotalTask((globalGetTaskList.filter(o=>!o.done)).length); 
  };
  function completedTab(){
    let tempArray=globalGetTaskList.filter(obj=>obj.done)
    setLocalTaskList(tempArray);
    setActiveTab(3);
    setTotalTask((globalGetTaskList.filter(o=>!o.done)).length); 
    
  };
  function allRender(){
    setLocalTaskList([...globalGetTaskList]);
    setActiveTab(1);
    setTotalTask((globalGetTaskList.filter(o=>!o.done)).length); 
  };
  function checkChange(list){
    let tempArray=[...globalGetTaskList];
    tempArray[list].done=!tempArray[list].done;
    globalSetTaskList([...tempArray]);
    console.log(globalGetTaskList[list].done);
    setTotalTask((globalGetTaskList.filter(o=>!o.done)).length); 
    setLocalTaskList(([...globalGetTaskList]));     
  };
  function deleteButton(i){
    console.log("this is i", i);
    let tempArray=[...globalGetTaskList.slice(0,i),...globalGetTaskList.slice(i+1)];
    setLocalTaskList(tempArray);
    globalSetTaskList(tempArray);
    setTotalTask((globalGetTaskList.filter(o=>!o.done)).length);    
  }
  
  return(
    <div className="mainClass">
      <div className="mainBox">
        <div className="divh1">
          <h1>Todo App</h1>
        </div>
        <input className="enterBox" type="text"
        onKeyPress={(event)=>{
          if(event.key=="Enter"){
            event.preventDefault();
            if(event.target.value!=""){
              if(getActiveTab=="3"){
                globalSetTaskList([...globalGetTaskList,{id:Math.random(),task:event.target.value,done:false,hover:'none'}]);  
                setTotalTask((globalGetTaskList.filter(o=>!o.done)).length); 
              }
              else{
                globalSetTaskList([...globalGetTaskList,{id:Math.random(),task:event.target.value,done:false,hover:'none'}]);
                setLocalTaskList([...getLocalTaskList,{id:Math.random(),task:event.target.value,done:false,hover:'none'}]);
                setTotalTask((globalGetTaskList.filter(o=>!o.done)).length); 
              }
              
            }
            event.currentTarget.value = "";
          }
        }} placeholder="What needs to be done?"></input>
        <div className="contentCards">
          {getLocalTaskList.map((list,i)=>{
            return(
              <div className="card" key={list.id}>
                <input type="checkbox" 
                id={list.id}
                onChange={()=>{checkChange(i)}}
                defaultChecked={list.done}
                style={{width:"30px",height:"30px",
                borderRadius:"15px"
                 }}></input>
                <span className="task" style={{textDecoration:list.done?"line-through":"none"}}>{list.task}</span>
                <button className="delButton" 
                onClick={()=>{deleteButton(i)}}
                style={{marginLeft:"auto"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg></button>
              </div>);
          })}
        </div>
        <div className="cardButton">
          <span>{getTotalTask} item left</span>
          <button className={getActiveTab===1? 'activeButton':'switchButton'} onClick={allRender}>All</button>
          <button className={getActiveTab===2? 'activeButton':'switchButton'} onClick={activeTab}>Active</button>
          <button className={getActiveTab===3? 'activeButton':'switchButton'} onClick={completedTab}>Completed</button>
        </div>
      </div>
    </div>
  );
}

export default App;
