import { createSlice } from '@reduxjs/toolkit';


const addSlice = createSlice({
    name:"tasks",
    initialState:[
     {
        id:1,
        title:"Software Developer",
        discription:"I am software Engineer"
     }

    ],
    reducers:{
        addTask:(state ,action)=>{
          
            state.push(action.payload)

        },
        updateTask:(state , action) =>{

            const {id ,title ,discription} =action.payload
            const update = state.find((user) =>user.id == id)

            if(update){
                update.title =title;
                update.discription = discription;
            }
        },
        deleteTask:(state ,action) =>{
              const {id} = action.payload
              const dele = state.find(del =>del.id == id)
              if(dele){

                return state.filter((del)=>del.id !== id);
              }
            
        }
    }
})

export const  {addTask , updateTask ,deleteTask} =addSlice.actions;
export default addSlice.reducer