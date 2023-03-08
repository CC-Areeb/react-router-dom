import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

export default function Careers() {

    const careers = useLoaderData();

    return (
        <>
            <div className=''>
                {
                    careers.map(career => (
                        <div className='main_job_box' key={career.id}>
                            <Link to={career.id.toString()} id='job_list' className='text-decoration-none'>
                                <div className=''>
                                    <div className="card shadow p-3 mb-5 rounded" id='job_card'>
                                        <div className="card-body">
                                            <h5 className="card-title job_title">{career.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Based in {career.location}</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

// Loader function
export const careersLoader = async () => {
    const response = await fetch('http://localhost:4000/careers');
    return response.json();
}