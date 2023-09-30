import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../Slice/TaskReducer'
import { useNavigate } from 'react-router-dom'

function AddTask() {
   
    const [title , setTitle] = useState("")
    const [discription ,setDiscription] = useState("")

    const user = useSelector((state)=>state.tasks)
    console.log("AddTask", user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
     const handleSubmit = (e) =>{
       e.preventDefault()

       dispatch(addTask({id:user[user.length-1].id + 1 , title , discription}))
       navigate('/')

     }


  return (
   <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add New Title</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Title</label>
                <input className='form-control' type='text' placeholder='Enter Title'name='title'
                onChange={(e)=>setTitle(e.target.value)}
                />

            </div>
            <div>
                <label htmlFor='discription'>Discription</label>
                <textarea className='form-control' type='textarea' placeholder='Enter Discription'name='discription'
                 onChange={(e)=>setDiscription(e.target.value)}></textarea>

            </div><br/>
            <button  className='btn btn-info' type='submit' >Add</button>
        </form>
    </div>

   </div>
  )
}

export default AddTask