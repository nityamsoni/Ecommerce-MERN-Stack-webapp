import React from 'react'
import main from '../sliderImages/home-applience/sale-background-with-home-appliances-household-vector-16382202.jpg'
import second from '../sliderImages/home-applience/woman-pink-blouse-buys-dishes-store.jpg'
import third from '../sliderImages/home-applience/front-view-young-female-with-washing-machine-holding-sale-banner-white-wall.jpg'
import forth from '../sliderImages/home-applience/photo-1626806819282-2c1dc01a5e0c.jpeg'
import fifth from '../sliderImages/home-applience/front-view-young-male-with-red-sale-writing-his-hands-blue-surface.jpg'
import six from '../sliderImages/home-applience/electronic-sale-poster_1302-5850.avif'

const HomeApplience = () => {
  return (
    <div className='w-screen'>
      <div>
      <img src={main} alt="" className='object-cover w-full' />
      <img src={second} alt="" className='object-cover w-full' />
      <img src={third} alt=""  className='object-cover w-full'/>
      <img src={forth} alt=""  className='object-cover w-full'/>
      <img src={fifth} alt=""  className='object-cover w-full'/>
      <img src={six} alt=""  className='object-cover w-full'/>
      </div>
    </div>
  )
}

export default HomeApplience
