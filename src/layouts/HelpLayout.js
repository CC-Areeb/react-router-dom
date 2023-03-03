import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
    return (
        <div>
            <div className='ms-4'>
                <h1 className="display-5 text-light">Website Help</h1>
                <p className='text-light fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, distinctio quae minus rem velit non.</p>
            </div>


            <nav className='ms-4' id='side_links'>
                <NavLink to='faq' id='faq' className='text-decoration-none mx-2 p-2 text-white rounded-3 fs-5'>View the FAQ</NavLink>
                <NavLink to='contact' id='contact' className='text-decoration-none mx-2 p-2 text-white rounded-3 fs-5'>Contact Us</NavLink>
            </nav>

            <Outlet></Outlet>
        </div>
    )
}
