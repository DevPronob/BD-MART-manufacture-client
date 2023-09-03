import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase/Firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Bookings = () => {
    const [user, loading, error] = useAuthState(auth)
    const { data, isLoading, isError,refetch } = useQuery('bookingsByEmail', fetchBookingsByEmail);
    // const navigate=useNavigate()
console.log(data)
  async function fetchBookingsByEmail() {
    const email = user?.email // Replace with the actual email
    const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        // Add any other headers you need
      };
    const response = await fetch(`http://localhost:5000/api/bookings/${email}`, { headers });

    if (!response.ok) {
      
      signOut(auth);
      localStorage.removeitem("accessToken")
      Navigate("/")

      throw new Error(`Network response was not ok: ${response.statusText}`);

    }

    return response.json();
  }

  if (isLoading || loading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  if (isError) {
    Swal.fire({
        position: 'top-up',
        icon: 'error',
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 1500
      })
  }
  return (
    <div>
     <div className="w-full">
            {/* <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet> */}
            <h3 className="text-3xl font-semibold my-4 text-center">My Bookings</h3>
            <div className="overflow-x-auto">
                <table className="table w-full sm:table-normal">
                    {/* head */}
                    <thead>
                        <tr>
                        <th  className=" sm:table-cell">No</th>
                        <th  className=" sm:table-cell">email</th>
                            <th  className=" sm:table-cell">Name</th>
                            <th  className=" sm:table-cell">Price</th>
                            <th  className=" sm:table-cell">quantity</th>
                            <th  className=" sm:table-cell">phone</th> 
                             <th  className=" sm:table-cell">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?data.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.email}</td>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td> 
                                <td>{item.phone}</td>
                                 <td>
                                 {
                                 item.paid?<span className='text-green-500'>Paid</span> :
                                    <Link
                                    to={`/dashboard/payment/${item._id}`}
                                >
                                    <button
                                        className='btn btn-primary btn-sm'
                                    >Pay</button>
                                </Link>
                                 }
                                
                                    </td>
                            </tr>):<h4 className='text-2xl  my-4 text-center'>No Bookings Found</h4>
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  )
}

export default Bookings




{/* <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
<div class="flex items-center justify-between pb-6">
  
<div class="overflow-y-hidden rounded-lg border">
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
        <th  className=" sm:table-cell">No</th>
                      <th  className=" sm:table-cell">email</th>
                          <th  className=" sm:table-cell">Name</th>
                          <th  className=" sm:table-cell">Price</th>
                          <th  className=" sm:table-cell">quantity</th>
                          <th  className=" sm:table-cell">phone</th> 
                           <th  className=" sm:table-cell">Payment</th>
        </tr>
      </thead>
      <tbody class="text-gray-500">
{
     data?data.map((item, index) =>{
        <>
         <tr>
        <td class="bg-white px-5 py-5 text-sm">
          <p class="whitespace-no-wrap">66</p>
        </td>
        <td class="bg-white px-5 py-5 text-sm">
          <div class="flex items-center">
            <div class="h-10 w-10 flex-shrink-0">
              <img class="h-full w-full rounded-full" src="/images/fR71TFZIDTv2jhvKsOMhC.png" alt="" />
            </div>
            <div class="ml-3">
              <p class="whitespace-no-wrap">Dana White</p>
            </div>
          </div>
        </td>
        <td class="bg-white px-5 py-5 text-sm">
          <p class="whitespace-no-wrap">Administrator</p>
        </td>
        <td class="bg-white px-5 py-5 text-sm">
          <p class="whitespace-no-wrap">Sep 28, 2022</p>
        </td>

        <td class="bg-white px-5 py-5 text-sm">
          <span class="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">Inactive</span>
        </td>
      </tr>
      <tr>
        
      </tr>
      </>
     }
}
        
      </tbody>
    </table>
  </div>
  
</div>
</div>
</div> */}