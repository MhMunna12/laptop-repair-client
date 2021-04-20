import React, { useState } from 'react';
import ServiceForm from '../ServiceForm/ServiceForm';

const ServiceCard = ({service,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
        function openModal() {
            setIsOpen(true);
        }
        function closeModal(){
            setIsOpen(false);
        }
        
    return (
        <div className="col-md-4 mb-5 container">
            <div className=" card shadow p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand ">{service.name}</h5>
                    <h6>{service.time}</h6>
                    <p>$ {service.price}</p>
                    <button onClick = {openModal} className ='btn btn-brand'>Service</button>
                    <ServiceForm modalIsOpen = {modalIsOpen} serviceOn = {service.name} price = {service.price} closeModal = {closeModal} date={date} />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;