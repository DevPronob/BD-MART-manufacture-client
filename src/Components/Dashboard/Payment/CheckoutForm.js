import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState,useEffect } from 'react'
// import './CheckoutForm.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { createPaymentIntent } from '../../slices/paymentSlices';
// import auth from '../../Firebase/Firebase.init';
// import { useAuthState } from 'react-firebase-hooks/auth';
const CheckoutForm = ({cart}) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    console.log(cart.price)
    useEffect(() => {
        const fetchPaymentIntent = async () => {
          try {
            const response = await fetch('https://manufacture-site-server-bice.vercel.app/create-payment-intent/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
              },
              body: JSON.stringify({ price: cart.price*cart.quantity}),
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setClientSecret(data.clientSecret);
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchPaymentIntent();
      }, [cart.price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
        return
    }

    const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if (error) {
        console.log('error', error)
        setCardError(error.message);
    }
    else {
        setCardError('');
        // console.log('payment method', paymentMethod)
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: cart?.email || 'unknown',
                    name: cart?.name || 'anonymous'
                },
            },
        },
    );

    if (confirmError) {
        console.log(confirmError);
    }

    console.log('payment intent', paymentIntent)
    setProcessing(false)
    if (paymentIntent) {
        setTransactionId(paymentIntent.id);
        // save payment information to the server
        const payment = {
            email: cart?.email,
            transactionId: paymentIntent.id,
            name:cart.name,
            date: new Date(),
            status: 'service pending',
            bookingId: cart._id
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the appropriate content type
                // Add any other headers as needed
                authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Example authorization header
              },
              body: JSON.stringify(payment),
          };
          fetch('https://manufacture-site-server-bice.vercel.app/payments', requestOptions)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (data) {
      // Display confirmation
      console.log(data)
    }
  })
  .catch((error) => {
    console.error('Error making POST request:', error);
    // Handle error
  });



  axios.put(`https://manufacture-site-server-bice.vercel.app/api/bookings/update/${cart._id}`, {
  paid: true,
  transactionId: paymentIntent.id,
})
  .then((response) => {
    console.log(response.data,"update");
  })
  .catch((error) => {
    console.error(error);
  });


    }
    console.log(clientSecret,"redux");
  }
  return (
    <>
    <form className='card' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='pay_btn px-20 py-3 mt-[42px] bg-blue-500 text-white text-base font-bold' type="submit" >
        {/* disabled={!stripe || !clientSecret || processing} */}
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
  )
}

export default CheckoutForm