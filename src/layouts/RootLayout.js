import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div>
            <header>
                <nav>
                    <h1 className="display-5 ms-4 mt-4">
                        <span className='border-bottom text-white pb-2'>Jobarouter</span>
                    </h1>
                    <div className="container my-4">
                        <div className="row">
                            <div className="col d-flex flex-row-reverse main_links">
                                <NavLink className='text-decoration-none mx-2 p-2 text-white rounded-3 fs-5' to='/'>Home</NavLink>
                                <NavLink className='text-decoration-none mx-2 p-2 text-white rounded-3 fs-5' to='about'>About</NavLink>
                                <NavLink className='text-decoration-none mx-2 p-2 text-white rounded-3 fs-5' to='help'>Help</NavLink>
                                <NavLink className='text-decoration-none mx-2 p-2 text-white rounded-3 fs-5' to='careers'>Careers</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}
