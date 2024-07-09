import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide   } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay ,FreeMode  } from 'swiper/modules';
import planDiscount from '../images/travel-sale-banner-with-yellow-tag-tickets_372769-253.avif'
import   homeapplience     from  '../images/home-app...jpg'
import   sales   from '../images/sales-discount-facebook-template_23-2149959351.avif'
import   watch   from '../images/watch.webp'
import cyberSale from '../images/cyber-5244032_1280.png'

import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import 'swiper/css/free-mode '
// import 'swiper/css/a11y '

// Import Swiper styles
import 'swiper/css';
import { NavLink } from 'react-router-dom';

export const SwiperSlider = () => {
  return (
    <div   className='w-screen' >
        <div className='flex justify-end mx-[2.5%] max-h-[90vh]  mt-9 rounded-xl '>
        <Swiper
        className='rounded-2xl mx-auto'
        navigation
        pagination 
      autoplay={{
        delay: 2000,
        
        disableOnInteraction: false
    }}
    modules={[Autoplay ,Pagination,Navigation,FreeMode ,A11y ]}
      spaceBetween={100}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><NavLink to={'cyber-sale'}><img src={cyberSale}  className='mx-auto rounded-2xl ' /></NavLink></SwiperSlide>
      <SwiperSlide><NavLink to={'watch-offer'}><img src={watch}  className='mx-auto rounded-2xl ' /></NavLink></SwiperSlide>
      <SwiperSlide><NavLink to={'homeaplience-offer'}><img src={homeapplience}  className='mx-auto' /></NavLink></SwiperSlide>
      
      <SwiperSlide><NavLink to={'plan-discount'}><img src={planDiscount}  className='mx-auto rounded-2xl ' /></NavLink></SwiperSlide>
      <SwiperSlide><NavLink to={'iphone-offer'}><img src={sales}  className='mx-auto rounded-2xl ' /></NavLink></SwiperSlide>
    
     

      {/* <SwiperSlide><img src={sales}  className='mx-auto' /></SwiperSlide> */}
     
      
    </Swiper>
        </div>
    </div>
  )
}
