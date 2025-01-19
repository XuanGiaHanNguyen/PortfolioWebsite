import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../../index.css"
import { MenuIcon } from '../../assets/icon';


function Header () {

    const navigate = useNavigate();


    return(
        <div className='w-screen py-3 flex flex-row-reverse gap-5 pr-5' 
        style={{backgroundColor: '#728099'}}>
            <button onClick={() => navigate("/")}>{MenuIcon}</button>
            <button className="font-bold text-gray-100" onClick={() => navigate("/")}>Contact</button>
            <button className="font-bold text-gray-100" onClick={() => navigate("/")}>Projects</button>
            <button className="font-bold text-gray-100" onClick={() => navigate("/")}>Experience</button>
            <button className="font-bold text-gray-100" onClick={() => navigate("/")}>Home</button>
        </div>
    )
}

export default Header