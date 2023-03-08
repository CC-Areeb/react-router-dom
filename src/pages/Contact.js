import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom';

export default function Contact() {

    const data = useActionData();

    let textAreaHeight = {
        height: '150px'
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1 className="display-5 text-light text-center">Contact Us!</h1>
                        <Form method='POST' action='/help/contact'>
                            <div className="form-floating mt-4">
                                <input type="text" className="form-control" name='name' id="name" placeholder="name" />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-floating mt-4">
                                <input type="email" className="form-control" id="email" name='email' placeholder="name@example.com" />
                                <label htmlFor="email">Email address</label>
                            </div>

                            <div className="form-floating mt-4">
                                <textarea className="form-control" placeholder="Leave a comment here" name='comment' id="comment" style={textAreaHeight}></textarea>
                                <label htmlFor="comment">Comments ...</label>
                            </div>
                            <button type="submit" className='btn btn-success mt-4 btn-lg'>Submit</button>
                            {data && data.error && <p>{data.error}</p>}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export const contactAction = async ({ request }) => {
    const data = await request.formData();
    const submit = {
        name: data.get('name'),
        email: data.get('email'),
        comment: data.get('comment'),
    };

    // send post request
    if (submit.email.lenght < 1) {
        return {error: 'Name must be over 1 characters long'}
    }
    
    // redirect the user
    return redirect('/');
}
