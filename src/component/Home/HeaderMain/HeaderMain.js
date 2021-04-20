import React from 'react';
import laptop from '../../../images/main-bg.jpg';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main className = 'row d-flex align-items-center header-main-container'>
            <div className="col-md-4 offset-md-1">
            <h1 style={{color:'#3A4256'}}>Best Computer <br/> Servicing Center</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nemo! Ipsa quasi minus rerum architecto!</p>
                    <button className="btn btn-primary">Appointment</button>
            </div>
            <div className='col-md-7'>
                <img style ={{height:'420px',marginLeft:'25px'}} src={laptop} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;