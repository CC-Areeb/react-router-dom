import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
    const location = useLocation();
    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`

            return (
                <div className="crumb ms-4 mb-4 fs-5" key={crumb}>
                    <u>
                        <Link className='text-decoration-none text-light' to={currentLink}>{crumb}</Link>
                    </u>
                </div>
            )
        });

    return (
        <div className='breadcrumbs'>
            {crumbs}
        </div>
    )
}
