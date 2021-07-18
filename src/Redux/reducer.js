import {combineReducers} from 'redux';
//   const [getGlobalTaskList,setGlobalTaskList]=useState([]);
//   const [getLocalTaskList,setLocalTaskList]=useState([...getGlobalTaskList]);
//   const [getTotalTask,setTotalTask]=useState(0);
//   const [getActiveTab,setActiveTab]=useState(1);
//   const [getStyle,setStyle]=useState({display:'none'});
//   const [modalIsOpen, setIsOpen] = React.useState(false);
//   const [getTempIndex,setTempIndex]=useState();

const initialState=[{id:1,task:"task1",done:false}];

const allState=()=>{

}

const addTodo=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_DO":
            const tempTodo={
                id:action.payload.id,
                task:action.payload.task,
                done:action.payload.done,
            };
            state.push(tempTodo);
            console.log("its switch",state,action);
            return state; 
        default:
            return state; 
    }
    
}
const deleteTodo=(state,action)=>{
    switch(action.type){
        case "DELETE_TO_DO":
            return state;
        default:
            return state;
    }
}


const petCounter=(state=0,action)=>{
    switch(action.type){
        case "PET_INCREASED":
            return state+1;
        case "PET_DECREASED":
            return state-1;
        default:
            return state; 
    }
}
export default combineReducers(
    {addTodoReducer:addTodo},
    {petCounterReducer:petCounter},
    {deleteTodoReducer:deleteTodo}
);


