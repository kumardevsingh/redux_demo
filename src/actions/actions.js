// export const action_changeName =()=>{
//     return async (dispatch) => {
//         const data = await fetch('https://jsonplaceholder.typicode.com/users')
//         const jsonRes = await data.json()
        
//         dispatch({ 
//                 type:"CHANGE_NAME",
//                 payload:jsonRes[2].name
//             });
        
//     }
// }
export const action_changeName =()=>{
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(jsonRes =>{
            dispatch({ 
                type:"CHANGE_NAME",
                payload:jsonRes[0].name
            });
        })
    }
}
// export const action_changeName =(name)=>{
//     return {
//         type:"CHANGE_NAME", 
//         payload:name
//     }   
// }
export const action_addWish =()=>{
    return {
        type:"ADD_WISH", 
        payload:"Code"
    }   
}