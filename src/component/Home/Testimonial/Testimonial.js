import React from 'react';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Testimonial = (props) => {
    const {description,name,from,imageUrl, comment} = props.testimonial;
    return (
        <div className = "card shadow-sm col-md-3  testimonial-container" >
            <div className = "d-flex mb-4 mt-2">
                <img src={imageUrl} alt="" style={{height:'70px'}}/>
                <div className='ms-3'>
                    <h5 className = 'text-primary'>{name}</h5>
                    <p className = ''>{from}</p>
                </div>
            </div>
            <div>
                <p>{description}</p>
                <h5>{comment}</h5>
                <p className='text-danger'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </p>
            </div>

        </div>
    );
};

export default Testimonial;