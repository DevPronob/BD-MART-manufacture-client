import React, { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
const ManageProducts = () => {
    // const [product,setProduct] =useState([])
    // useEffect(() =>{
    //     fetch('http://localhost:5000/api/tools')
    //     .then(res =>res.json())
    //     .then(data =>setProduct(data))
    // },[])
    const { data: product = [], refetch } = useQuery(['posts'], async () => {
        const headers = {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Replace with your actual bearer token
            'Content-Type': 'application/json'
        };
    
        const response = await fetch('http://localhost:5000/api/tools', {
            headers: headers
        });
    
        const data = await response.json();
        console.log(data);
        return data;
    });

    
    
    
    
    
    
    const deleteUserMutation = useMutation(async (userId) => {
        const headers = {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Replace with your actual bearer token
            'Content-Type': 'application/json'
        };
    
        await fetch(`http://localhost:5000/api/tools/delete/${userId}`, {
            method: 'DELETE',
            headers: headers
        });
    }, {
        onSuccess: () => {
            refetch();
            console.log("delete successful");
        },
    });
   
    const handleDelete=(id) =>{
        deleteUserMutation.mutate(id)
    }
  return (
    <div class="overflow-x-auto">
    <table class="table md:w-full sm:table-normal">
    
    <thead>
                        <tr>
                        <th>No</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Delete</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product?product.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.Available}</td>
                                <td><button onClick={() =>handleDelete(item._id)} class="btn btn-warning">Delete</button></td>
                                 
                            </tr>):<h4 className='text-2xl  my-4 text-center'>No Bookings Found</h4>
                        }
                        
                        
                    </tbody>
    </table>
    </div>  
  )
}

export default ManageProducts
