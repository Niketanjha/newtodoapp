import './App.css';
import React, {useState,useEffect} from 'react';

function App() {
  const [globalGetTaskList,globalSetTaskList]=useState([]);
  const [getLocalTaskList,setLocalTaskList]=useState([...globalGetTaskList]);
  const [getTotalTask,setTotalTask]=useState(1);
  const[getActiveTab,setActiveTab]=useState(1);
  
  function activeTab(){
    let tempArray=globalGetTaskList.filter(obj=>!obj.done)
    setLocalTaskList(tempArray);
    setActiveTab(2);
  };
  function completedTab(){
    let tempArray=globalGetTaskList.filter(obj=>obj.done)
    setLocalTaskList(tempArray);
    setActiveTab(3);

  };
  function allRender(){
    setLocalTaskList([...globalGetTaskList]);
    setActiveTab(1);
  };
  function checkChange(list){
    let tempArray=[...globalGetTaskList];
    tempArray[list].done=!tempArray[list].done;
    globalSetTaskList([...tempArray]);
    console.log(globalGetTaskList[list].done);
    setTotalTask((globalGetTaskList.filter(o=>!o.done)).length);

    
  };
  
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
            globalSetTaskList([...globalGetTaskList,{id:Math.random(),task:event.target.value,done:false}]);
            setLocalTaskList([...getLocalTaskList,{id:Math.random(),task:event.target.value,done:false}]);
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
                <span className="task">{list.task}</span>
                
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
