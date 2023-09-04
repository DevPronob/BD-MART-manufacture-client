import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useForm } from 'react-hook-form';

const ToolsDetails = () => {
    const { id } = useParams();
    const [successMessage, setSuccessMessage] = useState('');
    const [open,setOpen] =useState(false)
    const [user, loading, error2] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(open)
    console.log(id,"id")
    const fetchProductById = async (id) => {
        const response = await fetch(`https://manufacture-site-server-bice.vercel.app/api/tools/${id}`);
        const data = await response.json();
        return data;
      };
      const { data: product = {}, isLoading, isError, error, refetch } = useQuery(
        ['product', id], // Use an array of query keys to include the parameter
        () => fetchProductById(id) // Pass the ID to the fetch function
      );

      const createPostMutation = useMutation(async (postData) => {
        const response = await fetch('https://manufacture-site-server-bice.vercel.app/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(postData),
        });
    
        const data = await response.json();
        console.log(data)
        return data;
      }, {
        onSuccess: () => {
            
          refetch();
          Swal.fire({
            icon: 'success',
            // title: 'Oops...',
            text: `Booking Successfull`,
            footer: '<a href="">Why do I have this issue?</a>'
          })
         
        },
      });
      const handleCreatePost = async (postData) => {
        try {
          await createPostMutation.mutateAsync(postData);
        } catch (error) {
          console.error('Error creating post:', error);
        }
      };

      if(isLoading){
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
    // const handleBooking =() =>{
    //     return <BookingModal></BookingModal>
    // }
    
    const onSubmit = event =>{
        // event.preventDefault()
        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
      const booking ={
              productName:productName,
              price:price,
              quantity:quantity,
              name:name,
              email:email,
              phone:phone
            }
              handleCreatePost(booking)
            console.log(booking)
        
            
            
        }
  return (
    <div>
       <div>
      <div className="card bg-white lg:py-5 lg:my-12 lg:mx-24 my-5 mx-4 grid lg:grid-cols-2 lg:card-side shadow-2xl">
        <div className="lg:border-r  border-purple-900">
          <div className="big-img flex items-center justify-center">
            <img className="w-[300px]" src={product.img} alt="product" />
          </div>

        </div>

        <div className="card-body ">
          <h2 className="card-title mb-6">{product.name}</h2>
          <p className="text-xl grow-0 flex items-center  font-bold">
            Price: <span className="text-[#ff3633] ps-3"> ${product.price}</span>
          </p>
          <p className="text-xl grow-0 flex items-center   font-bold">
          
        
         Available {product.Available}
          </p>
          <p className='text-xl grow-0 flex items-center font-bold'>Minimum Order Quantity   <span className='ps-3'>100</span></p>
          <p className=" my-6 font-bold">{product.description}</p>
          <button
            // onClick={handlePlaceOrder}
            className="btn m-auto my-5 w-[150px] hover:bg-[#ff0336] hover:text-white "
            onClick={()=>window.my_modal_3.showModal()}
          >
            Place Order
          </button>
        
        </div>
      </div>


     
    </div>
{/*     
               {
                open ?
                <BookingModal
                product={product}
                    refetch={refetch}
                ></BookingModal>:""
               }
           */}

           <div>
           {/* <button className="btn" >open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <form onSubmit={onSubmit}  method="dialog" className="modal-box text-center flex flex-col items-center">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="text-lg font-bold">{product.name}</h3>
     {/* <form className=''> */}
    <input  name='productName' type="text" value={product.name}  class="input my-1 mt-1 input-bordered w-full max-w-xs" />
    <input name='price' type="text" value={product.price}  class="input mt-1 my-1 input-bordered w-full max-w-xs" />
    <input min={100} name='quantity' type="text"  placeholder='Add Quantity'  class="input my-1 mt-1 input-bordered w-full max-w-xs" />
    <input name='name' value={user?.displayName} type="text" placeholder="Name" class="input my-1 mt-1 input-bordered w-full max-w-xs" />
    <input name='phone'  type="text" placeholder="Phone Number" class="input my-1 mt-1 input-bordered w-full max-w-xs" />
    <input name='email' value={user?.email} type="text" placeholder="Email" class="input my-1 input-bordered w-full max-w-xs" />
 <input for="my-modal-6" type="submit" className='btn my-1 block w-80 mx-auto text-black mx-4'  value="Submit" />
 
  {/* </form> */}
  </form>
</dialog>
           </div>
    </div>
  )
}

export default ToolsDetails
