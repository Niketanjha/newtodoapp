// const [getGlobalTaskList,setGlobalTaskList]=useState([]);
//   const [getLocalTaskList,setLocalTaskList]=useState([...getGlobalTaskList]);
//   const [getTotalTask,setTotalTask]=useState(0);
//   const [getActiveTab,setActiveTab]=useState(1);
//   const [getStyle,setStyle]=useState({display:'none'});
//   const [modalIsOpen, setIsOpen] = React.useState(false);

import store from "../store";

//   const [getTempIndex,setTempIndex]=useState();
export function globalToDoReducer(state=[],action){
    switch(action.type){
        case "ADD_GLOBAL_TO_DO":
            const tempTodo={
                id:action.payload.id,
                task:action.payload.task,
                done:action.payload.done,
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