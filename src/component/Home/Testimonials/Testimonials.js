import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testiMonials, setTestiMonials] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:6060/reviews')
        .then(res => res.json())
        .then(data => setTestiMonials(data))
    } ,[])
    return (
        <section className ='mt-5 p-2' style={{backgroundColor:'rgb(247, 244, 244)'}}>
            <div className='container'>
                <div>
                    <h2 className = "text-primary text-center text-uppercase mb-2">Testimonial</h2>
                </div>
                <div className='d-flex-justify-content-center'>
                    <div className='row pt-4 p-3'>
                        {
                            testiMonials.map(testimonial => <Testimonial testimonial = {testimonial} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;