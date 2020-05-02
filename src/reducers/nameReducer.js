

export const nameReducer = (state = [],action) =>{
   if(action.type ==="CHANGE_NAME"){
       return  action.payload;
       
   }
    return state;
}