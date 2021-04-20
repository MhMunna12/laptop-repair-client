import React, { useEffect, useState } from 'react';
import Engineer from '../Engineer/Engineer';


const Engineers = () => {
    const [engineers, setEngineers] = useState([])

    useEffect(()=>{
        fetch('https://quiet-inlet-08578.herokuapp.com/engineers')
        .then(res => res.json())
        .then(data => setEngineers(data))
    },[])
    return (
        <div>
            <div className = 'text-center mt-5 p-2'>
                <h3 className = 'text-center text-brand text-uppercase'>Service ProvideS Engineers</h3>
                <p>Lorem ipsum dolor sit amet adipiscing elit curabitur eu ante non lobortis posuere</p>
            </div>
            <div className ='d-flex justify-content-center'>
                <div className = 'row mt-2 p-3'>
                    {
                        engineers.map(engineer => <Engineer engineer = {engineer} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Engineers;