import React from 'react'
import watchMain from '../sliderImages/watch/watch-sale-ad-promote-template-design-7690eb14f98018ce92ab0a7691be3a5b_screen.jpg'
import second from '../sliderImages/watch/_0000__0025_laag_13.jpg'
import third from '../sliderImages/watch/luxury-watch-ads-design-template-b61c4f12321f1d83d91908ee25e0d0a6_screen.jpg'
import forth from '../sliderImages/watch/51dBgKL1osL._UL500_.jpg'
import fifth from '../sliderImages/watch/208932346-luxury-watches-collection-on-black-background-3d-rendering.jpg'
import six from '../sliderImages/watch/208932346-luxury-watches-collection-on-black-background-3d-rendering.jpg'

const Watch = () => {
  return (
    <div className='w-[100vw] scroll-smooth'>
      <div>
      <img src={watchMain} alt="" className='object-cover w-full'  />
      <img src={second} alt=""  className='object-cover w-full' />
      <img src={third} alt=""  className='object-cover w-full'/>
      <img src={forth} alt=""  className='object-cover w-full'/>
      <img src={fifth} alt=""  className='object-cover w-full'/>
      <img src={six} alt="" className='object-cover w-full' />
        </div> 
    </div>
  )
}

export default Watch
