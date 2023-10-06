import React from 'react'
import img from '../../../images/homepage-feature.png'
import './AboutSection.css'
const AboutSection = () => {
  return (
    <div className='lg:px-32 px-8'>
    <div class="">

  <div class="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
    <div class="flex flex-col items-center justify-between lg:flex-row">
      <div class="">
        <div class="lg:max-w-xl lg:pr-5">
          <p class="flex text-sm uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
            </svg>
            An agency for high growth startups
          </p>
          <h2 class="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight  sm:text-7xl sm:leading-snug">
          INTRODUCING BD-MART
            {/* <span class="my-1 inline-block border-b-8  bg-orange-400 px-4 font-bold ">different</span> */}
          </h2>
          <p class="text-base">Equipped with advanced features and engineered to
     meet high demands, Worx NITRO cordless tools and 
    accessories are proven to power through the toughest projects and deliver more with every charge.</p>
        </div>
        
      </div>
      <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
        
        <div class="">
          
          <div class="flex  flex-wrap">
          <img className='about_img' src={img} alt="Girl in a jacket"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default AboutSection



{/* <div className="hero py-[60px]">
<div className="hero-content flex-col lg:flex-row-reverse">
  <div className="text-center lg:text-left">
      <h4 className='text-3xl'>INTRODUCING BD-MART</h4>
    <h1 className="text-5xl font-bold">PROVEN POWER</h1>
    <p className="py-6">Equipped with advanced features and engineered to
     meet high demands, Worx NITRO cordless tools and 
    accessories are proven to power through the toughest projects and deliver more with every charge.</p>
  </div>
  <div className="card flex-shrink-0 ">
    <div className="card-body">
    <img className='about_img' src={img} alt="Girl in a jacket"/>
     </div>
  </div>
</div>
</div> */}