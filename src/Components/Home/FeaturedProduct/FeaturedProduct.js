import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query';
import './FeaturedProduct.css'
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../Shared/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';
import ProductCard from './ProductCard';
const FeaturedProduct = () => {
  const navigate =useNavigate()
  const nagivateToDetail = id=>{
    console.log(id)
    navigate(`/tool/${id}`)
  }
    const fetchPosts = async () => {
        const response = await fetch('https://bd-mart-manufacture-server-21nsdnrz5-devpronob.vercel.app/api/tools/featured');
        const data = await response.json();
        return data;
      };
     const { data: products = [], isLoading, isError, error, refetch } = useQuery(['products'], fetchPosts);

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
 
  console.log(products,"pro")
  return (
    <div className='lg:px-32 px-8 text-center'>
        <h3 className='text-3xl font-bold'>Feature Products</h3>
        <div className='flex items-center justify-center flex-wrap product_card'>
            {
               products.map(items =>{
                return <ProductCard items={items}></ProductCard>
               }) 
            }
        </div>
      
    </div>
  )
}

export default FeaturedProduct



{/* <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                  <img class="peer absolute top-0 right-0 h-full w-[83%] object-cover pe-5" src={items.img} alt="product image" />
                 
                  <svg class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
                </a>
                <div class="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl tracking-tight text-slate-900">{items.name}</h5>
                  </a>
                  <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      
                    </p>
                  </div>

                  <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${items.price}</span>
            <a onClick={()=>nagivateToDetail(items._id)} class=" cursor-pointer flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Details</a>
        </div>
                </div>
              </div> */}