import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe("pk_test_51HVdTWBLa4QtAMbzJF8fESJt8K44YI2RpHvgDeomDGPXujOgO65ZODQda0qJjd7KiMCyuKPq1NpAfrpXYhaw5VTG00f5DSaCaY");
const Payment = () => {
    const params =useParams();
    console.log(params.id)
    const { data, isLoading, isError } = useQuery(['tool', params.id], fetchToolById);

  async function fetchToolById() {
    const response = await fetch(`https://manufacture-site-server-bice.vercel.app/api/bookings/book/${params.id}`);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return response.json();
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {isError.message}</p>;
  }
  return (
    <div className='flex flex-col items-center justify-center mt-[65px]'>
            <h3 className="text-3xl">Payment for {data.productName}</h3>
            <p className="text-xl">Please pay <strong>${data.price}</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        cart={data}
                    />
                </Elements>
            </div>
        </div>
  )
}

export default Payment
