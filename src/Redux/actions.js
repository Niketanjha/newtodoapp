export const petIncrement =()=>{
    return {type:"PET_INCREASED"}
};
export const petDecrement=()=>{
    return {type:"PET_DECREASED"}
};
export const addToDoitem =(action)=>{
    return {type:"ADD_TO_DO",payload:action}
}

export const deleteToDoitem =(action)=>{
    return {type:"DELETE_TO_DO",payload:action}
}