import React from 'react';
import featured from '../../../images/feature.jpg'
import './Featured.css';
const Featured = () => {
    return (
        <section className = "pb-0 pb-md-5 my-5">
            <div className='container mb-5'>
                <div className = 'row'>
                    <div className='col-md-6 m-md-0 featured'>
                        <img src={featured} alt=""/>
                    </div>
                    <div className='col-md-5 align-self-center right-featured' style={{marginLeft:'-100px'}}>
                        <div className='shadow p-4' style={{width:'650px',backgroundColor:'white', height:'340px'}}>
                            <h3 className='mt-4 ' style={{color:'#3A4256'}}>A Trusted Name To <br/>
                                Customers Over <span className='text-danger'>3 Years</span> For <br/>
                                Quality Computer Repair Service.
                            </h3>
                            <p className='mb-3'>
                                We have been in the repair and service business since 2020. We have experienced service department ready to handle all of your repair tasks. Our team will get your device with guarantee.
                            </p>
                            <button className = "btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;