import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Home.css'

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../../../images/homepage2.jpg'
import img2 from '../../../images/homepage.jpg'
import img3 from '../../../images/hero-power.jpg'
import img4 from '../../../images/img1.jpeg'
const BannerSection = () => {
    const slideImages=[img2,img4,img1,img2,img3]
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            slideImages.map(items =>{
                return <SwiperSlide><img src={items} alt="Girl in a jacket"/></SwiperSlide>
            })
        }
      </Swiper>
    </>
  )
}

export default BannerSection
