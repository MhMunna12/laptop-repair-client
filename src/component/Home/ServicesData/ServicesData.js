import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ServicesData = ({service}) => {
    const {name,price,imageUrl, _id} = service;

    return (
        <div className="container col-sm-12 col-md-6 col-lg-4 mt-4  text-center">
            <div className="d-flex shadow justify-content-center" style={{borderRadius:'20px'}}>
            <Card style={{ width: "18rem" }}>
                <Card.Img style={{height:'250px',width:'100%'}} variant="top" src={service.imageUrl} />
                <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <h4 style={{border:'1px solid lightGrey',padding:'3px',borderRadius:'10px'}}> 
                <Button  className="mr-5" as={Link} to={`/service/${_id}`}  variant="primary">Add Now </Button> ${service.price}</h4>
                </Card.Body>
            </Card>
            </div>
        </div>  
    );
};

export default ServicesData;