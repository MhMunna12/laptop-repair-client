import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentFrom from './PaymentForm';
const stripePromise = loadStripe('pk_test_51IeI8IKQ0rUFHkAj5YfN99juT0vddoulWFM1dHJmeneYz2ltfEcSxN3004kvKD9Ia5VnR6BF7HoheLGsyhi9qKtt00a93I68Ye');
const Payment = ( {serviceInfo} ) => {
    return (
        <Elements stripe={stripePromise}>
           <PaymentFrom serviceInfo={serviceInfo} />
        </Elements>
    );
};

export default Payment;