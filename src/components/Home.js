import React from 'react'
import img1 from '../images/job1.jpg';
import img2 from '../images/job2.jpg';
import img3 from '../images/job3.png';

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="display-5 text-white">Home</h1>
                    </div>

                    <div className="col">
                        <article className='text-white fst-italic my-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque distinctio tempore, repudiandae, ut odit officiis praesentium illum sequi quisquam assumenda animi sapiente, deserunt ipsa quaerat quae. Libero aliquam perspiciatis, molestias veritatis voluptates alias a doloribus dolorem similique fugiat praesentium vero qui inventore quo itaque deleniti sit laborum neque dicta repellendus rerum, rem accusamus saepe veniam? Harum asperiores repellat eaque quas quibusdam! Optio perferendis vero itaque numquam reiciendis omnis obcaecati totam, magnam nostrum quidem, porro corporis, exercitationem facere reprehenderit. Eos totam expedita maiores veritatis atque voluptas vitae eaque rerum reiciendis odio.
                        </article>

                        <article className='text-white fst-italic my-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus minus in atque ab animi delectus molestias quidem labore fugiat, cupiditate ratione nostrum. Eligendi laudantium aut eius natus laboriosam culpa voluptatibus labore. Repudiandae, eum est. Dicta cupiditate laudantium architecto, totam error vel deleniti eaque ab aperiam consectetur! Enim soluta harum laudantium minus, consequuntur nobis perferendis consectetur porro non natus fugit corporis totam. Harum et magnam error, saepe repellat fuga. Veniam sit, non possimus officia ab esse veritatis excepturi facere expedita. Ullam maiores consequatur magni optio earum ea sed nulla doloremque!
                        </article>

                        <article className='text-white fst-italic my-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus minus in atque ab animi delectus molestias quidem labore fugiat, cupiditate ratione nostrum. Eligendi laudantium aut eius natus laboriosam culpa voluptatibus labore. Repudiandae, eum est. Dicta cupiditate laudantium architecto, totam error vel deleniti eaque ab aperiam consectetur! Enim soluta harum laudantium minus, consequuntur nobis perferendis consectetur porro non natus fugit corporis totam. Harum et magnam error, saepe repellat fuga. Veniam sit, non possimus officia ab esse veritatis excepturi facere expedita. Ullam maiores consequatur magni optio earum ea sed nulla doloremque!
                        </article>
                    </div>

                    <div className="col-12 text-center">
                        <img className='img-fluid job_img m-4' src={img1} alt="" srcset="" />
                        <img className='img-fluid job_img m-4' src={img2} alt="" srcset="" />
                        <img className='img-fluid job_img m-4' src={img3} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </>
    )
}
