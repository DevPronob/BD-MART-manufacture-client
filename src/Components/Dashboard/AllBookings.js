import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';

const AllBookings = () => {
  const fetchPosts = async () => {
    const url = 'https://manufacture-site-server-bice.vercel.app/api/bookings';
    const headers = new Headers({
      'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
  
    try {
      const response = await fetch(url, {
        method: 'GET', // You can change the HTTP method if needed
        headers: headers, // Pass the headers object here
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
      throw error; // Rethrow the error to handle it at a higher level if needed
    }
  };
     const { data: items = [], isLoading, isError, error, refetch } = useQuery(['products'], fetchPosts);
     if (isError) {
        return  Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
          footer: '<a href="">Why do I have this issue?</a>'
        })
    }


     if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
      }

      const handleDelete =(email) =>{

      }
    console.log(items,"itemw")
    
  return (
    <div>
     <div className="w-full">
            {/* <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet> */}
            <h3 className="text-3xl font-semibold my-4 text-center">All Bookings</h3>
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
                            <th  className=" sm:table-cell">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?items.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.email}</td>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td> 
                                <td>{item.phone}</td>
                                 {/* <td>
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
                                
                                    </td> */}
                            </tr>):<h4 className='text-2xl  my-4 text-center'>No Bookings Found</h4>
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  )
}

export default AllBookings
