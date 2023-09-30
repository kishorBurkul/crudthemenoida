const initialState = {
    tasks:[],
}

const addReducer = (state=initialState , action)=>{

    switch(action.type){
           
        case "ADD_TASK":
            return{
                ...state , 
                tasks:[...state.tasks , action.payload],
            };

            default:
    }


}


export default addReducer