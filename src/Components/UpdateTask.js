import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTask } from '../Slice/TaskReducer'
import { useNavigate } from 'react-router-dom';

function UpdateTask() {

    const {id} = useParams()
    const dispatch =  useDispatch()
    const navigate = useNavigate()
   
    const user = useSelector((state)=>state.tasks);

    const exstingTask = user.filter(f => f.id == id);
    console.log("aaaaaaaaa",exstingTask)
    const {title , discription} = exstingTask[0]
    const [utitle , setUtitle] =useState(title);
    const [udiscription ,setUdiscription] = useState(discription);
 

     const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(updateTask({
            id:id,
            title:utitle,
            discription:udiscription
        }))
      
        navigate('/')

     }

  return (

    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update Title Details</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Title</label>
                <input  value={utitle} className='form-control' type='text' placeholder='Enter Title'name='title'
                onChange={(e)=>setUtitle(e.target.value)}
               
                />

            </div>
            <div>
                <label htmlFor='discription'>Discription</label>
                <textarea value={udiscription} className='form-control' type='textarea' placeholder='Enter Discription'name='discription'
                 onChange={e =>setUdiscription(e.target.value)}
                 ></textarea>

            </div><br/>
            <button  className='btn btn-info' type='submit'>Update</button>
        </form>
    </div>
    </div>

  )
}

export default UpdateTask