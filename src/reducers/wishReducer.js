
export const wishReducer = (state =[],action) =>{
   if(action.type ==="ADD_WISH"){
       return [...state, action.payload];
   }
    return state;
}