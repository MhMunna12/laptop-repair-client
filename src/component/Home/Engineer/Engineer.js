import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

const Engineer = ({engineer}) => {
    console.log(engineer);
    return (
        <div className=" col-sm-12 shadow  col-md-6 col-lg-3 mt-4  text-center" style = {{marginLeft:'75px'}}>
            <div className=" container d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'250px',width:'100%'}} variant="top" src={engineer.imageUrl} />
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