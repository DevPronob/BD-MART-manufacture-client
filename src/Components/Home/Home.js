import React from 'react'
import BannerSection from './BannerSection/BannerSection'
import AboutSection from './AboutSection/AboutSection'
import FeatureSection from './FeatureSection/FeatureSection'
import FeaturedProduct from './FeaturedProduct/FeaturedProduct'
import NewsletterSection from './NewsletterSection/NewsletterSection'
import Footer from '../../Shared/Footer/Footer'
import BlogSection from './BlogSection/BlogSection'
import ReviewSection from './ReviewSection/ReviewSection'
import Team from './Team/Team'
import WhatDone from '../WhatDone/WhatDone'

const Home = () => {
  return (
    <div>
        <BannerSection></BannerSection>
        <AboutSection></AboutSection>
        <FeaturedProduct></FeaturedProduct>
        <FeatureSection></FeatureSection>
        <Team></Team>
        
        <NewsletterSection></NewsletterSection>

        <WhatDone></WhatDone>
        <ReviewSection></ReviewSection>
        <BlogSection></BlogSection>
        <Footer></Footer>
    </div>
  )
}

export default Home
