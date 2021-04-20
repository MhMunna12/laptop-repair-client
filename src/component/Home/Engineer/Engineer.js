import React from 'react';
import { Card } from 'react-bootstrap';
import './Engineer.css';
const Engineer = ({engineer}) => {
    console.log(engineer);
    return (
        <div className=" col-sm-12 shadow  col-md-6 col-lg-3 mt-4  text-center" style = {{marginLeft:'75px'}}>
            <div className=" container d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <div className="engineer-effect">
                        <Card.Img style={{height:'250px',width:'100%'}} variant="top" src={engineer.imageUrl} />
                    </div>
                    <Card.Body>
                    <Card.Title>{engineer.name}</Card.Title>
                    <Card.Text>
                        <p className="text-uppercase"> {engineer.position}</p> 
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>  
        
    );
};

export default Engineer;