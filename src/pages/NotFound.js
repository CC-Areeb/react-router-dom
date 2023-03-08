import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <div className='text-center'>
                <h1 className='display-5 text-light'>Page not Found!</h1>
            </div>

            <div className="text-center">
                <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste et odio odit,
                    ratione, eligendi sed vero ullam esse aliquam dolores corrupti ad magnam
                    quasi deleniti possimus sint aut nostrum!
                </p>
            </div>

            <div className="text-center">
                <p className='text-light'>
                    Back to "
                    <Link className='text-decoration-none home_page' to='/'> home page</Link> ".
                </p>
            </div>
        </>
    )
}
