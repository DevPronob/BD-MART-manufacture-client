import React from 'react'
import { PiCallBellFill } from 'react-icons/pi';
import { BiSolidMap } from 'react-icons/bi';
import { BsFillChatFill } from 'react-icons/bs';
import { CgRepeat } from 'react-icons/cg';
import './FeatureSection.css'
const FeatureSection = () => {
    const data =
    [
        {
            title:"ALWAYS BY YOUR SIDE",
            dec:"We take extensive measures to ensure all our products are made to the very We’ll repair, without highest standards and meet all relevant industry regulations.",
            icon:<PiCallBellFill />
        },
        {
            title:"FIND A LOCAL RETAILER",
            dec:"DEWALT® products and accessories are available online and at retailers nationwide.We’ll repair, without  Search for retailers near you by postcode or city.",
            icon:<BiSolidMap />
        },
        {
            title:"HOW CAN WE HELP?",
            dec:"If you want to contact us,We’ll repair, without We’ll repair, without charge, charge, now it's easier than ever to get in touch. Whatever you need, we are here for you.",
            icon:<BsFillChatFill />
        },
        {
            title:"WARRANTY INFORMATION",
            dec:"We’re confident in our products.  any defects We’ll repair, without charge, due to faulty materials in our products. or workmanship within the specified warranty.",
            icon:<CgRepeat />
        },
    ]
  return (
    <div className='lg:px-32 px-8 text-center py-[130px]'>
     <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 flex items-center justify-center">
        {
            data.map(items =>{
                return  <div class="rounded-md border border-gray-200  p-8 shadow-sm">
                <div class="my-4 flex items-center">
                  <div class="mr-4 flex h-12 w-12 items-center justify-center   text-2xl text-blue-500">
                  
                  <h1 className='text-[40px] text-center text-tahiti hover:text-silver'>{items.icon}</h1>
                  </div>
                  <h3 class="text-[16px] font-bold md:text-[16px]">{items.title}</h3>
                </div>
                <p class="text-gray-700">{items.dec}</p>
              </div>
            })
        }
</div>
    </div>
  )
}

export default FeatureSection


{/* <div className='p-4 py-12 card-item'>

                    <h1 className='text-[70px] text-center text-tahiti hover:text-silver'>{items.icon}</h1>
                    <h3 className='text-bold text-[23px] py-4'>{items.title}</h3>
                    <p>{items.dec}</p>
                    <button className="btn btn-active btn-neutral mt-10">Learn More</button>
                </div> */}


 


{/* <section class="mx-auto px-6 text-gray-800 md:max-w-screen-xl">


  <div class="grid gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-3">
    <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
      <div class="my-4 flex items-center">
        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-blue-500">
          <!-- et:beaker -->
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.85em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 27 32"><path fill="currentColor" d="M17.5 1a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1h9zM.99 27.635c-1.074 1.511-.954 2.498-.664 3.06C.633 31.29 1.433 32 3.5 32h20c2.067 0 2.867-.71 3.174-1.306c.29-.562.41-1.549-.648-3.034l-6.219-9.95l-.088-.124C19.272 16.948 17 13.022 17 9.75V2.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7.25c0 3.491-2.465 7.957-2.493 8.005L.99 27.635zm24.796 2.6c-.251.487-1.084.765-2.286.765h-20c-1.202 0-2.035-.278-2.286-.765c-.229-.444-.02-1.162.62-2.066l4.999-8.948l.007.004c.91.525 1.851 1.068 3.719 1.068s2.81-.542 3.719-1.066c.833-.48 1.619-.934 3.22-.934c.607 0 1.133.075 1.617.21l6.08 9.712c.611.858.82 1.576.591 2.02zM10 9.75V3h6v6.75c0 2.84 1.516 6.042 2.404 7.602a7.862 7.862 0 0 0-.905-.059c-1.869 0-2.81.542-3.719 1.066c-.833.48-1.619.934-3.22.934c-1.601 0-2.387-.454-3.219-.934l-.019-.011l.046-.082C7.393 18.226 10 13.58 10 9.75z" /></svg>
        </div>
        <h3 class="text-2xl font-bold md:text-xl">Enhanced</h3>
      </div>
      <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repellendus.</p>
    </div>
    <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
      <div class="my-4 flex items-center">
        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-blue-500">
          <!-- et:beaker -->
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.85em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 27 32"><path fill="currentColor" d="M17.5 1a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1h9zM.99 27.635c-1.074 1.511-.954 2.498-.664 3.06C.633 31.29 1.433 32 3.5 32h20c2.067 0 2.867-.71 3.174-1.306c.29-.562.41-1.549-.648-3.034l-6.219-9.95l-.088-.124C19.272 16.948 17 13.022 17 9.75V2.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7.25c0 3.491-2.465 7.957-2.493 8.005L.99 27.635zm24.796 2.6c-.251.487-1.084.765-2.286.765h-20c-1.202 0-2.035-.278-2.286-.765c-.229-.444-.02-1.162.62-2.066l4.999-8.948l.007.004c.91.525 1.851 1.068 3.719 1.068s2.81-.542 3.719-1.066c.833-.48 1.619-.934 3.22-.934c.607 0 1.133.075 1.617.21l6.08 9.712c.611.858.82 1.576.591 2.02zM10 9.75V3h6v6.75c0 2.84 1.516 6.042 2.404 7.602a7.862 7.862 0 0 0-.905-.059c-1.869 0-2.81.542-3.719 1.066c-.833.48-1.619.934-3.22.934c-1.601 0-2.387-.454-3.219-.934l-.019-.011l.046-.082C7.393 18.226 10 13.58 10 9.75z" /></svg>
        </div>
        <h3 class="text-2xl font-bold md:text-xl">Performant</h3>
      </div>
      <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repellendus.</p>
    </div>
    <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
      <div class="my-4 flex items-center">
        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-blue-500">
          <!-- et:beaker -->
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.85em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 27 32"><path fill="currentColor" d="M17.5 1a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1h9zM.99 27.635c-1.074 1.511-.954 2.498-.664 3.06C.633 31.29 1.433 32 3.5 32h20c2.067 0 2.867-.71 3.174-1.306c.29-.562.41-1.549-.648-3.034l-6.219-9.95l-.088-.124C19.272 16.948 17 13.022 17 9.75V2.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7.25c0 3.491-2.465 7.957-2.493 8.005L.99 27.635zm24.796 2.6c-.251.487-1.084.765-2.286.765h-20c-1.202 0-2.035-.278-2.286-.765c-.229-.444-.02-1.162.62-2.066l4.999-8.948l.007.004c.91.525 1.851 1.068 3.719 1.068s2.81-.542 3.719-1.066c.833-.48 1.619-.934 3.22-.934c.607 0 1.133.075 1.617.21l6.08 9.712c.611.858.82 1.576.591 2.02zM10 9.75V3h6v6.75c0 2.84 1.516 6.042 2.404 7.602a7.862 7.862 0 0 0-.905-.059c-1.869 0-2.81.542-3.719 1.066c-.833.48-1.619.934-3.22.934c-1.601 0-2.387-.454-3.219-.934l-.019-.011l.046-.082C7.393 18.226 10 13.58 10 9.75z" /></svg>
        </div>
        <h3 class="text-2xl font-bold md:text-xl">Analytical</h3>
      </div>
      <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repellendus.</p>
    </div>
    <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
      <div class="my-4 flex items-center">
        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-blue-500">
          <!-- et:beaker -->
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.85em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 27 32"><path fill="currentColor" d="M17.5 1a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1h9zM.99 27.635c-1.074 1.511-.954 2.498-.664 3.06C.633 31.29 1.433 32 3.5 32h20c2.067 0 2.867-.71 3.174-1.306c.29-.562.41-1.549-.648-3.034l-6.219-9.95l-.088-.124C19.272 16.948 17 13.022 17 9.75V2.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7.25c0 3.491-2.465 7.957-2.493 8.005L.99 27.635zm24.796 2.6c-.251.487-1.084.765-2.286.765h-20c-1.202 0-2.035-.278-2.286-.765c-.229-.444-.02-1.162.62-2.066l4.999-8.948l.007.004c.91.525 1.851 1.068 3.719 1.068s2.81-.542 3.719-1.066c.833-.48 1.619-.934 3.22-.934c.607 0 1.133.075 1.617.21l6.08 9.712c.611.858.82 1.576.591 2.02zM10 9.75V3h6v6.75c0 2.84 1.516 6.042 2.404 7.602a7.862 7.862 0 0 0-.905-.059c-1.869 0-2.81.542-3.719 1.066c-.833.48-1.619.934-3.22.934c-1.601 0-2.387-.454-3.219-.934l-.019-.011l.046-.082C7.393 18.226 10 13.58 10 9.75z" /></svg>
        </div>
        <h3 class="text-2xl font-bold md:text-xl">Enhanced</h3>
      </div>
      <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repellendus.</p>
    </div>
    <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
      <div class="my-4 flex items-center">
        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-blue-500">
          <!-- et:beaker -->
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.85em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 27 32"><path fill="currentColor" d="M17.5 1a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1h9zM.99 27.635c-1.074 1.511-.954 2.498-.664 3.06C.633 31.29 1.433 32 3.5 32h20c2.067 0 2.867-.71 3.174-1.306c.29-.562.41-1.549-.648-3.034l-6.219-9.95l-.088-.124C19.272 16.948 17 13.022 17 9.75V2.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7.25c0 3.491-2.465 7.957-2.493 8.005L.99 27.635zm24.796 2.6c-.251.487-1.084.765-2.286.765h-20c-1.202 0-2.035-.278-2.286-.765c-.229-.444-.02-1.162.62-2.066l4.999-8.948l.007.004c.91.525 1.851 1.068 3.719 1.068s2.81-.542 3.719-1.066c.833-.48 1.619-.934 3.22-.934c.607 0 1.133.075 1.617.21l6.08 9.712c.611.858.82 1.576.591 2.02zM10 9.75V3h6v6.75c0 2.84 1.516 6.042 2.404 7.602a7.862 7.862 0 0 0-.905-.059c-1.869 0-2.81.542-3.719 1.066c-.833.48-1.619.934-3.22.934c-1.601 0-2.387-.454-3.219-.934l-.019-.011l.046-.082C7.393 18.226 10 13.58 10 9.75z" /></svg>
        </div>
        <h3 class="text-2xl font-bold md:text-xl">Performant</h3>
      </div>
      <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repellendus.</p>
    </div>
    <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
      <div class="my-4 flex items-center">
        <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-blue-500">
          <!-- et:beaker -->
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.85em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 27 32"><path fill="currentColor" d="M17.5 1a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1h9zM.99 27.635c-1.074 1.511-.954 2.498-.664 3.06C.633 31.29 1.433 32 3.5 32h20c2.067 0 2.867-.71 3.174-1.306c.29-.562.41-1.549-.648-3.034l-6.219-9.95l-.088-.124C19.272 16.948 17 13.022 17 9.75V2.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v7.25c0 3.491-2.465 7.957-2.493 8.005L.99 27.635zm24.796 2.6c-.251.487-1.084.765-2.286.765h-20c-1.202 0-2.035-.278-2.286-.765c-.229-.444-.02-1.162.62-2.066l4.999-8.948l.007.004c.91.525 1.851 1.068 3.719 1.068s2.81-.542 3.719-1.066c.833-.48 1.619-.934 3.22-.934c.607 0 1.133.075 1.617.21l6.08 9.712c.611.858.82 1.576.591 2.02zM10 9.75V3h6v6.75c0 2.84 1.516 6.042 2.404 7.602a7.862 7.862 0 0 0-.905-.059c-1.869 0-2.81.542-3.719 1.066c-.833.48-1.619.934-3.22.934c-1.601 0-2.387-.454-3.219-.934l-.019-.011l.046-.082C7.393 18.226 10 13.58 10 9.75z" /></svg>
        </div>
        <h3 class="text-2xl font-bold md:text-xl">Analytical</h3>
      </div>
      <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repellendus.</p>
    </div>
  </div>
</section> */}
