import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../Slice/ThemeSlice';

const useTheme =()=>{

    const theme = useSelector((state)=>state.theme);
    const dispatch = useDispatch();

    const toggleTheme = () =>{

        dispatch(changeTheme())
    }

    return {theme, toggleTheme}




}

export default useTheme ;