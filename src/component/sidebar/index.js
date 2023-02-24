import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    const activeStyle = { color: 'green' }
    const inactiveStyle = { color: 'black' }
    return (
        <div className='sidebar'>
            <ul>
                <li><NavLink to="/" style={({ isActive })=> isActive ? activeStyle : inactiveStyle}>Home</NavLink></li>
                <li><NavLink to="/database/people" style={({ isActive })=> isActive ? activeStyle : inactiveStyle}>People</NavLink></li>
                <li><NavLink to="/database/facebookdetails" style={({ isActive })=> isActive ? activeStyle : inactiveStyle}>FacebookDetails</NavLink></li>
            </ul>

        </div>
    )
}

export default Sidebar