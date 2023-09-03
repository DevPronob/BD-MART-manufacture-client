import React from 'react'
import { useQuery } from 'react-query';
import LoadingSpinner from '../../../Shared/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';
import ReactStars from "react-rating-stars-component";
const ReviewSection = () => {
    const fetchPosts = async () => {
        const response = await fetch('http://localhost:5000/api/review');
        const data = await response.json();
        return data;
      };
     const { data: reviews = [], isLoading, isError, error, refetch } = useQuery(['reviews'], fetchPosts);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  if (isError) {
    return  Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.message}`,
      footer: '<a href="">Why do I have this issue?</a>'
    })
   
  }
  return (
    <div className='lg:px-32 px-8 text-center'>
  <h3 className='text-3xl font-bold'>User Reviews</h3>
  <div className='flex items-center justify-center flex-wrap'>
    {reviews.map(items => (
      <ul className="w-full md:w-1/2 lg:w-1/3 px-2">
        <li className="py-8 text-center md:text-left border px-4 m-2">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:ml-6">
              <div className="flex items-center">
                <ReactStars
                  count={5}
                  value={items.rating}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
              <p className="mt-3 md:mt-5 text-base text-gray-900">{items.comment}</p>
              <p className="mt-1 text-xs md:text-sm text-gray-600">March 01, 2022</p>
            </div>
          </div>
        </li>
      </ul>
    ))}
  </div>
</div>
  )
}

export default ReviewSection
