import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const AddTool = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey='58eb9354a575dee7d27662849fdfa362';
    const onSubmit = data => {
        // console.log(data)
        const image = data.img[0];
        
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`;
        fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res=>res.json())
      .then(result =>{
        console.log(result)
        if(result.success){
          const img = result.data.url;
          const product = {
              name: data.name,
              price:data.price,
              Available: data.availableQuantity,
              img: img,
              description:data.description,

          }
          console.log(product, "console")
          fetch('https://bd-mart-manufacture-server-21nsdnrz5-devpronob.vercel.app/api/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
        .then(res =>res.json())
        .then(data =>{
            Swal.fire({
                position: 'top-up',
                icon: 'success',
                title: `${data.name} added Successfully`,
                showConfirmButton: false,
                timer: 1500
              })
        })


        }
      })
         }

  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
            <h2 className='text-3xl  my-8'>Add Tool</h2>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Name</span>
      
    </label>
    <input {...register("name", {
      required:{
        value:true,
        message:"Error name"
      }
     
    })} type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    
  </label>
  </div>
  {/* <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Email</span>
      
    </label>
    <input {...register("email", {
      required:{
        value:true,
        message:"Error email message"
      },
      pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    })} type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  </label>
  </div> */}
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Description</span>
      
    </label>
    <input className='' {...register("description", {
      required:{
        value:true,
        message:"error message"
      },
    })} type="text" placeholder="description" class="input py-[30px] input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

  </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">price</span>
      
    </label>
    <input {...register("price", {
      required:{
        value:true,
        message:"Error  message"
      },
     
    })} type="number" placeholder="price" class="input input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

  </label>
  </div>
  
  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Available Quantity </span>
    
  </label>
  <input {...register("availableQuantity", {
    required:{
      value:true,
      message:" Error   message"
    }
  
  })} type="number" placeholder="Available Quantity" class="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}


  </label>
  </div>
  

  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">photo</span>
      
    </label>
    <input {...register("img", {
      required:{
        value:true,
        message:"Error name"
      }
     
    })} type="file" placeholder="photo" class="input input-bordered w-full max-w-xs" />
    <label className="label">
    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.file.message}</span>}
    
  </label>
  </div>
   <input className=' flex max-w-xs btn btn-outline' value={"Add Item"} type="submit" />
  </form>
            </div>
        </div>
               
    </div>
  )
}

export default AddTool
