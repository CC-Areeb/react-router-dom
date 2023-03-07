import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

export default function CareersError() {
    const error = useRouteError();

    return (
        <div className='ms-4'>
            <h1 className='text-light'>Error</h1>
            <p className='fs-4 text-light'>{error.message}</p>
            <Link to='/' className='back_to_home'>Back to home</Link>
        </div>
    )
}
