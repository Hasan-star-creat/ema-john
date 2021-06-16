import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './chackoutForm';

const stripePromise = loadStripe(
  "pk_test_51J2rL7SDNslLJFfkV8T7XOJGND8vC8UsRq4OAFb1n9yfHczgsi6AgVlvizoIfbfGyJjBbEsBzvfQHD8cYTHSq5Yo00yrHVW6Ps"
);

const ProcessPayments = () => {
    return (
      <div>
          <h2>please pay for me</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
          
        </Elements>
      </div>
    );
};

export default ProcessPayments;