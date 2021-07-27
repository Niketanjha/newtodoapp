export const addGlobalToDoItem =(action)=>{
    return {type:"ADD_GLOBAL_TO_DO",payload:action}
};
export const deleteGlobalToDoItem =(action)=>{
    return {type:"DELETE_GLOBAL_TO_DO",payload:action}
};
export const updateGlobalToDoItem =(action)=>{
    return {type:"UPDATE_GLOBAL_TO_DO",payload:action}
};
export const getGlobalToDoItem =(action)=>{
    return {type:"GET_GLOBAL_TO_DO",payload:action}
};
export const addLocalStorage=(action)=>{
    return {type:"ADD_LOCAL_STORAGE",payload:action}
}


export const addLocalToDoItem =(action)=>{
    return {type:"ADD_LOCAL_TO_DO",payload:action}
};
export const updateLocalToDoItem =(action)=>{
    return {type:"UPDATE_LOCAL_TO_DO",payload:action}
};


export const set_Total_Task =(action)=>{
    return {type:"SET_TOTAL_TASK",payload:action}
};


export const set_Active_Tab =(action)=>{
    return {type:"SET_ACTIVE_TAB",payload:action}
};


export const setModalIsOpen =(action)=>{
    return {type:"SET_MODAL_STATE",payload:action}
};


export const set_Temp_Index=(action)=>{
    return {type:"SET_TEMP_INDEX",payload:action}
};