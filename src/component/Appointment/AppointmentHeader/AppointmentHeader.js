import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import mainBg from '../../../images/main-bg.jpg';
const AppointmentHeader = ({HandleOnChange}) => {
    
    return (
        <main className = 'row d-flex align-items-center p-4' style = {{backgroundColor:'lightgray'}}>
            <div className="col-md-5 offset-md-1">
                <h1  style={{color:'#3A4256'}}>Appointment</h1>
                <Calendar
                    onChange={HandleOnChange}
                    value={new Date()}
                /> 
            </div>
            <div className='col-md-6'>
            <img style ={{height:'380px',marginLeft:'25px'}} src={mainBg} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default AppointmentHeader;