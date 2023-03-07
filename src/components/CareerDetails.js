import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();

    return (
        <div>
            <h1>Career Details for {career.title}</h1>
            <p>Starting Salary {career.salary}</p>
            <p>Location {career.location}</p>
            
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus labore quaerat tempora eaque eligendi, porro, veritatis id officia laborum magnam possimus, accusantium error illo consequatur debitis animi perspiciatis autem eveniet asperiores vitae nihil similique alias. Autem animi modi ab et.
            </div>
        </div>
    )
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;  
    const response = await fetch('http://localhost:4000/careers/' + id);
    return response.json();
}
