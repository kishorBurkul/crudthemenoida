import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../Slice/TaskReducer';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import useTheme from '../Hook/useTheme';

function TaskManger() {

    const user = useSelector((state) => state.tasks)
    // console.log("Task Manager", user)
    const dispatch = useDispatch();
    const deleteItem = (id) => {
        dispatch(deleteTask({ id: id }))
    }

    // const { theme, toggleTheme } = useTheme()
    const [theme, setTheme] = useState("light-theme");

    const toggleTheme = () => {

        theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme")



    }

    useEffect(() => {

        document.body.className = theme

    }, [theme])


    return (

        <div className='container-fluid'>

            {/* <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <label style={{ marginRight: "5px" }}>Switch Theme</label>
                    <Form.Check
                        type="switch"
                        id="theme-switch"

                        onClick={toggleTheme}
                    />
                    <Form.Check
                        type="switch"
                        id="theme-switch"


                        onChange={toggleTheme}
                        className="ml-2"
                    />

                </Navbar.Collapse>
            </Navbar> */}



            <nav className='navbar navbar-expand-lg navbar'>


                <Form.Check
                    type="switch"
                    id="theme-switch"
                    label="Dark Theme"

                    onChange={toggleTheme}
                    className="ml-2"
                />

            </nav>
            <div className='container'>
                <Link to="/addtask" className='btn btn-success my-3'>Add Task</Link>
                <label style={{ marginLeft: "10px", fontSize: "18px" }}>List of Details</label>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <th>Title</th>
                            <th>Discription</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.discription}</td>
                                <td>
                                    <Link to={`/edit/${item.id}`} className='btn btn-sm btn-primary'>Edit</Link>&nbsp;

                                    <button onClick={() => deleteItem(item.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default TaskManger