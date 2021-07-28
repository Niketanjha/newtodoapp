function getLocalStorage(){
    const x=localStorage.getItem("newGlobalState");
    if(x==="" || x===null){
      localStorage.setItem("newGlobalState",[]);
      return([]); 
    }
    else{
      console.log(JSON.parse(x));
      const temp=(JSON.parse(x)).map((key)=>{
        for(let o in key){
          if(o==="date"){
            key['date']= new Date(key['date']); 
          }
        }
        return key; 
      });
      console.log(temp);
      return temp; 
    }
}

export function globalToDoReducer(state=getLocalStorage(),action){
    switch(action.type){
        case "UPDATE_GLOBAL_TO_DO":
            state=[...action.payload];
            localStorage.setItem("newGlobalState",JSON.stringify(state));
            return state; 
        default:
            return state; 
    }
}

export function totalTaskReducer(state=0,action){
    switch(action.type){
        case "SET_TOTAL_TASK":
            state=action.payload;
            return state; 
        default:
            return state; 
    }
}

export function setActiveTab(state=1,action){
    switch(action.type){
        case "SET_ACTIVE_TAB":
            state=action.payload;
            return state; 
        default:
            return state; 
    }
}

export function modalIsOpen(state=false,action){
    switch(action.type){
        case "SET_MODAL_STATE":
            state=action.payload;
            return state; 
        default:
            return state; 
    }
}

export function setTempIndex(state=0,action){
    switch(action.type){
        case "SET_TEMP_INDEX":
            state=action.payload;
            return state; 
        default:
            return state; 
    }
}