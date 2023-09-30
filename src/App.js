// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskManger from './Components/TaskManger';
import { useState } from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import AddTask from './Components/AddTask';
import UpdateTask from './Components/UpdateTask';
import Header from './Components/Header';

function App() {


  // const [darkTheme, setDarkTheme] = useState(false);

  // const handleToggleTheme = () => {
  //   setDarkTheme(!darkTheme);
  // };

  return (
    <>
 {/* <Header darkTheme={darkTheme} onToggleTheme={handleToggleTheme}/>  */}
 <div className='container-fluid'>
<BrowserRouter>
<Routes>
  
  <Route path='/' element={<TaskManger/>}></Route>
  <Route path='/addtask' element={<AddTask/>}></Route>
  <Route path='/edit/:id' element={<UpdateTask/>}></Route>

  
</Routes>

</BrowserRouter>
</div>
    </>
  );
}

export default App;
