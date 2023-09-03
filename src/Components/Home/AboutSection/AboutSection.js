import React from 'react'
import img from '../../../images/homepage-feature.png'
import './AboutSection.css'
const AboutSection = () => {
  return (
    <div className='lg:px-32 px-8 text-center'>
      <div className="hero py-[60px]">
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
</div>
    </div>
  )
}

export default AboutSection
