import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import './Manage.css';
import Sidebar from '../Sidebar/Sidebar';

const Manage = () => {
    const [services,setServices] = useState([]);
    
    const handleDelete = (id) =>{
        fetch(`http://localhost:6060/deleteService/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('delete successfully')
            }
        })
    }


    useEffect(()=>{
        fetch('http://localhost:6060/services')
        .then(res => res.json())
        .then(data =>{
          setServices(data)
        })
    },[services])
    return (
        <div className = 'row'>
            <Sidebar/>
            <div className = 'col-md-10'>
                <div className="manage-container">
                <h3>Manage Product</h3>
                <div className="manage-area">
                    <Table hover size="sm">
                        <thead>
                            <tr className="table-tr">
                                <th>ServiceName</th>
                                <th>Visited Time</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(service => 
                                <tr>
                                    <td>{service.name}</td>
                                    <td>{service.time}</td>
                                    <td>{service.price}</td>
                                    <td><FontAwesomeIcon className="ml-4 icon-color" onClick={() => handleDelete(service._id)} icon={faTrashAlt}/></td>
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

export default Manage;