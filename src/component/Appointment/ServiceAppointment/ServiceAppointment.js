import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceAppointment = ({date}) => {
    const [appServices, setAppServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:6060/services')
        .then(res => res.json())
        .then(data => setAppServices(data))
    },[])
    return (
        <section>
            <h2 className='text-center mt-4 text-primary mb-5'>Available Service on {date.toDateString()}</h2>
            <div className = 'row'>
                {
                    appServices.map(service => <ServiceCard service = {service} date ={date} key={service.id} />)
                }
            </div>
        </section>
    );
};

export default ServiceAppointment;