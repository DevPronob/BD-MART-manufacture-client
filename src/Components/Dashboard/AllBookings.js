import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';

const AllBookings = () => {
    const fetchPosts = async () => {
        const response = await fetch('http://localhost:5000/api/tools');
        const data = await response.json();
        return data;
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
    
    
  return (
    <div>
     <tr>
        <th>{items.email}</th>
        <td>{items.productName}</td>
        <td>{items.price}</td>
        

        {
          (items.price && !items.paid) ?<td>{(items.price && !items.paid) && <Link to ={`/dashboard/payment/${items._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}</td>:<td>{(items.price && items.paid) && <button className='btn btn-xs btn-success'>paid</button>}</td> 
        }
        {/* <td>{(items.price && !items.paid) && <Link to ={`/dashboard/payment/${items._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}</td>
        <td>{(items.price && items.paid) && <button className='btn btn-xs btn-success'>pay</button>}</td> */}
        {/* <td>{(items.price && items.paid) &&   <Link to ={""}><button className='btn btn-xs btn-success'>Paid</button></Link>}</td> */}
        <td>{!items.paid ?<button onClick={() =>handleDelete(items.email)}  className='btn btn-xs btn-success'>cancle</button>:""}</td>
        <td>{items.transactionId}</td>
      </tr>
    </div>
  )
}

export default AllBookings
