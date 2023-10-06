import React from 'react';
import './About.css'
import Footer from '../../Shared/Footer/Footer';
const About = () => {
  return (
    <div>
      {/* <p>Footer Component</p> */}
      <div className='hero__footer'>
        <div className='footer__header__content'>
        <h2>About Us</h2>
        <div class="leading-6">
  <div class="mx-auto px-4 sm:px-6 lg:px-8"> 
    <nav>
      <ul class="flex m-0 items-center p-0">
        <li class="text-left">
          <a href="#" title="" class="cursor-pointer text-gray-400 hover:text-gray-900">
            {/* <!-- Heroicons - Home --> */}
            <svg class="block h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
        </li>

        {/* <li class="flex items-center text-left">
          <svg class="block h-5 w-5 align-middle text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
          </svg>

          <a href="#" title="" class="cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-gray-900"> Analytics </a>
        </li> */}

        <li class="flex items-center text-left">
          <svg class="block h-5 w-5 align-middle text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
          </svg>

          <a href="#" title="" class="cursor-pointer text-sm font-normal leading-5 text-gray-400 hover:text-gray-900">Home</a>
        </li>
      </ul>
    </nav>

    {/* <p class="mt-5 text-lg font-bold leading-7 text-gray-800">About</p> */}
  </div>
</div>

        </div>
      </div>

<div className='main__container pb-18'>


<div className='about__company'>
<div className='about__company__img'>
<img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/Fotolia_68431323_Subscription_Monthly_M-660x439.jpg" alt="Description of the image" />
</div>
<div className='about__company__content'>
  <h2>Welcome</h2>
  <p>Textile is a global non-profit that works closely with our members to drive industry transformation in preferred fibers, integrity and standards and responsible supply networks. We identify and share best practices regarding farming, materials, processing, traceability and product end-of-life in order to reduce the textile industry’s impact on the world’s water, soil and air, and the human population.</p>
</div>


<div className='about__company__content'>
<h2>Founder’s Note</h2>
  <p>Members may be new to sustainability practices or want to take their strategy to the next level. 
<br/>
CEO: Steven Rogers</p>
</div>
<div className='about__company__img'>
<img src="https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/Fotolia_68431323_Subscription_Monthly_M-660x439.jpg" alt="Description of the image" />
</div>
</div>





</div>
<Footer></Footer>
    </div>
  );
}

export default About;
