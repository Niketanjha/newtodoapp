import store from "../store";

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
export function localStorageReducer(state=getLocalStorage(),action){
    switch(action.type){
        case "ADD_LOCAL_STORAGE":
            localStorage.setItem("newGlobalState",JSON.stringify(action.payload));
            return state; 
        default:
            return state; 
    }
}

export function globalToDoReducer(state=[],action){
    switch(action.type){
        case "ADD_GLOBAL_TO_DO":
            const tempTodo={
                id:action.payload.id,
                task:action.payload.task,
                done:action.payload.done,
                date:action.payload.date
            };
            state.push(tempTodo);
            console.log("its switch",state,action);
            return state; 
        case "DELETE_GLOBAL_TO_DO":
            let i=action.payload;
            let tempArray=[...state.slice(0,i),...state.slice(i+1)];
            state=[...tempArray];
            return state; 
        case "UPDATE_GLOBAL_TO_DO":
            state=[...action.payload];
            return state; 
        case "GET_GLOBAL_TO_DO":
            return state; 
        default:
            return state; 
    }
}

export function localToDoReducer(state=[],action){
    switch(action.type){
        case "ADD_LOCAL_TO_DO":
            const tempTodo={
                id:action.payload.id,
                task:action.payload.task,
                done:action.payload.done,
                date:action.payload.date
            };
            state.push(tempTodo);
            console.log("its switch",state,action);
            return state;
        case "UPDATE_LOCAL_TO_DO":
            state=[...action.payload];
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