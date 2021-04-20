import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ServiceList.css';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceOrder, setServiceOrder] = useState([]);

    useEffect(()=>{
        fetch(`https://quiet-inlet-08578.herokuapp.com/serviceOrder?email=`+loggedInUser.email)
        .then(res =>res.json())
        .then(data => setServiceOrder(data))
    },[])
    return (
        <div className = 'row'>
            <Sidebar/>
            <div className = 'col-md-10 orders'>
                <div className="">
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                                <h3>Orders</h3>
                            </div>
                            <div>
                                <h6 className='mt-2'>{loggedInUser.name}</h6>
                            </div>
                        </div>
                        
                        <div className="order-area">
                        <Table striped hover size="sm">
                            <thead>
                                <tr className="table-tr">
                                    <th>Service Name</th>
                                    <th>Email</th>
                                    <th>TRX ID</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    serviceOrder.map(service => 
                                    <tr>
                                        <td>{service.serviceName}</td>
                                        <td>{service.email}</td>
                                        <td>{service.TRXId}</td>
                                        <td>{service.servicePrice}</td>
                                        
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
     );
};

export default ServiceList;