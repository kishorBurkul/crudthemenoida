import { createSlice } from "@reduxjs/toolkit";


// const state = [

//     darkTheme={
//         color:'white',
//         backgroundColor:"grey",
//         padding:'20px'
//     },
//     lightTheme = {
//         backgroundColor:"white",
//         color:"black",
//         padding:'20px'
//     }
// ]
    



const themeSlice = createSlice({

    name:"theme",
    initialState:"light",
    reducers:{

        changeTheme:(state , action)=> {

        //   return state ===  "light" ? <body style={{color:'red',
        //   backgroundColor:"green",
        //   }} ></body>: <body style={{backgroundColor:"yellow",
        //  color:"black"
        // }}></body>
        return state === "light" ? "black":"light";


        },
    }
})

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer