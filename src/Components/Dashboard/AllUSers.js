import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const AllUSers = () => {
    // const[users,setUser] =useState([])
    // const [user, loading, error2] = useAuthState(auth);
// Make a GET request to fetch the data
const fetchUserData = async () => {
    const response = await fetch('https://bd-mart-manufacture-server-21nsdnrz5-devpronob.vercel.app/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  };
  
  // Use useQuery directly here
  const { data: users=[], isLoading, isError,refetch } = useQuery('userData', fetchUserData, {
    refetchInterval: 10000, // Refetch every 10 seconds (adjust as needed)
    retry: 3, // Number of retry attempts on error
  });
  
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  if (isError) {
    return <p>Error fetching user data</p>;
  }
  
        const handleMakeAdmin = user =>{
            const headers = {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            };
            fetch(`https://bd-mart-manufacture-server-21nsdnrz5-devpronob.vercel.app/api/user/users/admin/${user._id}`, {
                method: 'PATCH',
                headers: headers
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data){
                    refetch()
                    Swal.fire({
                        position: 'top-up',
                        icon: 'success',
                        title: `Make Admin Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
  return (
    <div className='mt-[80px]'>
     <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full sm:table-normal">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                           
                            <th>Email</th>
                            <th>Role</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                
                                <td>{user.email}</td>
                                <td className='text-orange-600 text-bold'>{ user.admin ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white">Make Admin</button> 
                                    }</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default AllUSers
