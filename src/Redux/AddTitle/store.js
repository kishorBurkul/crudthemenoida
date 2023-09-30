import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "../../Slice/TaskReducer";
import ThemeSlice from "../../Slice/ThemeSlice";

const store = configureStore({
    reducer:{
        tasks:TaskReducer,
        theme:ThemeSlice
    }
})

export default store




































// import { combineReducers } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
// import addReducer from "./AddReducer";

// const rootReducer = combineReducers({
    
//         tasks: addReducer,


// })

// const store = configureStore({ 
//     reducer:{
//         tasks: addReducer
//     }
       
    
//  });

// import { combineReducers } from 'redux';
// // import { configureStore } from '@reduxjs/toolkit'
// import addReducer from "./AddReducer";

// const store = combineReducers({
//   tasks: addReducer,
// });



// export default store;
