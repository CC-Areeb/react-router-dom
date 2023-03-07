import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
    return (
        <div className='ms-4 text-light'>
            <h2 className=''>Careers</h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
            
            <Outlet />
        </div>
    )
}
