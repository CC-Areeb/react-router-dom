import React from 'react'

export default function Contact() {

    let textAreaHeight = {
        height: '150px'
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <h1 className="display-5 text-light text-center">Contact Us!</h1>
                        <form>
                            <div class="form-floating mt-4">
                                <input type="text" class="form-control" id="name" placeholder="name" />
                                <label for="name">Name</label>
                            </div>

                            <div class="form-floating mt-4">
                                <input type="email" class="form-control" id="email" placeholder="name@example.com" required/>
                                <label for="email">Email address</label>
                            </div>

                            <div class="form-floating mt-4">
                                <textarea class="form-control" placeholder="Leave a comment here" id="comment" style={textAreaHeight} required></textarea>
                                <label for="comment">Comments ...</label>
                            </div>
                        </form>
                        <button type="submit" className='btn btn-success mt-4 btn-lg'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
