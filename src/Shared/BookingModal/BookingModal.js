import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const BookingModal = ({product,refetch}) => {
    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
      
      const booking ={
              productName:data.productName,
              price:data.price,
              quantity:data.quantity,
              name:data.name,
              email:data.email
            }

            console.log(booking)
   
    }
  return (
    <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Product Name</span>
      
    </label>
    <input className='' {...register("productName", {
      required:{
        value:true,
        message:"error message"
      },
    })} type="text" placeholder="Product Name" value={product.name} class="input py-[30px] input-bordered w-full max-w-xs" />
    <label className="label">
    {/* {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}

  </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Your Name</span>
      
    </label>
    <input className='' {...register("name", {
      required:{
        value:true,
        message:"error message"
      },
    })} type="text" placeholder="Name"  class="input py-[30px] input-bordered w-full max-w-xs" />
    <label className="label">
    {/* {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}

  </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Price</span>
      
    </label>
    <input className='' {...register("price", {
      required:{
        value:true,
        message:"error message"
      },
    })} type="text" placeholder="Price" value={product.price} class="input py-[30px] input-bordered w-full max-w-xs" />
    <label className="label">
    {/* {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}

  </label>
  </div>

  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">email</span>
      
    </label>
    <input className='' {...register("email", {
      required:{
        value:true,
        message:"error message"
      },
    })} type="email" placeholder="email" value={user.email} class="input py-[30px] input-bordered w-full max-w-xs" />
    <label className="label">
    {/* {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}

  </label>
  </div>
  
  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Quantity</span>
    
  </label>
  <input class="input input-bordered w-full max-w-xs" type="number" {...register("quantity", { min: 100, max: product.Available })} />
  <label className="label">
  {/* {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.rating?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>} */}
  </label>
  </div>

   <input className='w-full max-w-xs btn btn-outline' type="submit" />
  </form> 
                </div>
            </div>
        </>
  )
}

export default BookingModal
