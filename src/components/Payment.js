import React, { useState } from 'react';
import { payForCourse } from '../BaseAPI';

const Payment = ({ enrollmentId }) => {
    const [paymentStatus, setPaymentStatus] = useState(false);
    const [error, setError] = useState(null); // State to handle errors

    const handlePayment = () => {
        console.log('Processing payment for enrollment ID:', enrollmentId); // Debugging line
        payForCourse(enrollmentId)
            .then(response => {
                alert('Payment successful!');
                setPaymentStatus(true);
                setError(null); // Clear any previous error
            })
            .catch(error => {
                console.error('Error processing payment:', error);
                setError(error.response.data || 'Payment failed.'); // Capture error message
            });
    };

    return (
        <div>
            {error && <p>{error}</p>} {/* Display error if it exists */}
            {!paymentStatus ? (
                <button onClick={handlePayment}>Pay Now</button>
            ) : (
                <p>Payment Complete!</p>
            )}
        </div>
    );
};

export default Payment;
