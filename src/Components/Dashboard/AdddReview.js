import React from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AdddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const review ={
            comment:data.text,
            name:data.name,
            rating:data.rating
          }
          fetch('https://bd-mart-manufacture-server-21nsdnrz5-devpronob.vercel.app/api/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
              console.log(data)
                if(data){
                   console.log(data.success)
                   Swal.fire({
                    position: 'top-up',
                    icon: 'success',
                    title: `Review Added Successfull`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
                else{
                    console.log("alreasy created")
                }
                // refetch();
            });
        }
  return (
    <div className='flex justify-center items-center mt-16 h-100'>
    <div class="card w-96 bg-base-100 shadow-xl">
<div class="card-body">
  <h2 class=" text-center font-bold text-2xl">Review</h2>


<form onSubmit={handleSubmit(onSubmit)}>
<div class="form-control w-full max-w-xs">
<label class="label">
  <span class="label-text">Name</span>
  
</label>
<input className='' {...register("name", {
  required:{
    value:true,
    message:"error message"
  },
})} type="text" placeholder="Name" class="input py-[30px] input-bordered w-full max-w-xs" />
<label className="label">
{errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

</label>
</div>

<div class="form-control w-full max-w-xs">
<label class="label">
  <span class="label-text">Comment</span>
  
</label>
<input className='' {...register("text", {
  required:{
    value:true,
    message:"error message"
  },
})} type="text" placeholder="Comment" class="input py-[30px] input-bordered w-full max-w-xs" />
<label className="label">
{errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

</label>
</div>


<div class="form-control w-full max-w-xs">
<label class="label">
<span class="label-text">Add Rating Between 1 to 5</span>

</label>
<input class="input input-bordered w-full max-w-xs" type="number" {...register("rating", { min: 1, max: 5 })} />
<label className="label">
{errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
{errors.rating?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
</label>
</div>

<input className='w-full max-w-xs btn btn-outline' type="submit" />
</form>
</div>
</div>
</div>
  )
}

export default AdddReview
