import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const WhatDone = () => {
    return (
        <div className='mb-18'>
            
            <h1 class="xl:text-4xl text-3xl pb-[50px] text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Explore What We've Done
            </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://htmldemo.net/megan/megan/assets/img/projects/2-1170.jpg" alt="BigCo Inc. logo"/></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/megan/megan/assets/img/projects/1-1170.jpg" alt="BigCo Inc. logo"/></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/megan/megan/assets/img/projects/5-1170.jpg" alt="BigCo Inc. logo"/></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/megan/megan/assets/img/projects/4-1170.jpg" alt="BigCo Inc. logo"/></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/megan/megan/assets/img/projects/2-1170.jpg" alt="BigCo Inc. logo"/></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/megan/megan/assets/img/projects/3-1170.jpg" alt="BigCo Inc. logo"/></SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
    );
}

export default WhatDone;
