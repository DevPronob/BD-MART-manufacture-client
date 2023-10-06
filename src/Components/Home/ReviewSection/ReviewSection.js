import React from 'react'
import { useQuery } from 'react-query';
import LoadingSpinner from '../../../Shared/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';
import ReactStars from "react-rating-stars-component";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
const ReviewSection = () => {
  const [user, loading, error2] = useAuthState(auth);
    const fetchPosts = async () => {
        const response = await fetch('https://bd-mart-manufacture-server-21nsdnrz5-devpronob.vercel.app/api/review');
        const data = await response.json();
        return data;
      };
     const { data: reviews = [], isLoading, isError, error, refetch } = useQuery(['reviews'], fetchPosts);

  if (isLoading || loading) {
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

  function formatDate(originalDateString) {
    const date = new Date(originalDateString);
  
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return formattedDate;
  }
  const profileImageUrl = user?.photoURL;
  return (
    <div className='lg:px-32 px-8 text-center py-16'>
  <h3 className='text-3xl font-bold'>User Reviews</h3>
  <div className='flex items-center justify-center flex-wrap py-10'>
    {reviews.map(items => (
      <ul class="w-full md:w-1/2 lg:w-[350px] px-2 ms-5">
      <li class="py-8 max-w-[300px] text-left border px-4 m-2">
        <div class="flex items-start">
          <img class="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle" src={profileImageUrl?profileImageUrl:"https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=N14PaYcMX9dfjIQx-gOrJcAUGyYRZ0Ohkbj5lH-GkQs="} alt="" />
    
          <div class="ml-6">
            <div class="flex items-center">
            <ReactStars
                      count={5}
                      value={items.rating}
                      size={24}
                      activeColor="#ffd700"
                    />
            </div>
            <p class="mt-5 text-base text-gray-900">{items.comment}</p>
            <p class="mt-5 text-sm font-bold text-gray-900">{items.name}</p>
            <p class="mt-1 text-sm text-gray-600">{formatDate(items.createdAt)}</p>
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



{/* <ul className="w-full md:w-1/2 lg:w-1/3 px-2">
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
      </ul> */}