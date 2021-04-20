import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import ServiceAppointment from '../ServiceAppointment/ServiceAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const HandleOnChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div>
            <AppointmentHeader HandleOnChange={HandleOnChange} />
            <ServiceAppointment date = {selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;