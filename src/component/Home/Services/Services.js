import React, { useEffect, useState } from 'react';
import ServicesData from '../ServicesData/ServicesData';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://quiet-inlet-08578.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className='mt-5'>
            <div className ='text-center'>
                <h5 className='text-brand'>Services</h5>
                <h2>We Are Provide Service</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className=' row w-75 mt-2 p-3'>
                    {
                        services.map(service =><ServicesData service ={service}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;