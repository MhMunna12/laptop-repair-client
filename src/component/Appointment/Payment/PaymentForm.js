import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const PaymentFrom = ({serviceInfo}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    console.log(serviceInfo);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      serviceInfo.TRXId=paymentMethod.id
      storeInDatabase(serviceInfo);
    }
  };
  const storeInDatabase = (payment) =>{
     fetch('http://localhost:6060/addServicesOrders', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(success => {
                if(success){
                    // closeModal();
                    alert('service created successfully')
                }
            })
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn btn-primary" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default PaymentFrom;