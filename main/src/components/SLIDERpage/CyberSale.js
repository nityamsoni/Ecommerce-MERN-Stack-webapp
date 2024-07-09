import React from 'react'
import Main from '../sliderImages/cyber-monday/amazon-india-electronics-sale-2015-banner1.jpg'
import second from '../sliderImages/cyber-monday/discount-dslr-camera-podium.jpg'
import third from '../sliderImages/cyber-monday/laptop -1.avif'
import forth from '../sliderImages/cyber-monday/laptop.jpg'

import six from '../sliderImages/cyber-monday/cyber-monday-with-podium-product-display-social-media-banner_122059-1207.avif'
import seven from '../sliderImages/cyber-monday/speakers.jpg'
import eight from '../sliderImages/cyber-monday/lipstic.jpg'

const CyberSale = () => {
  return (
    <div className='w-screen'>
      
      <div>
      <img src={Main} alt=""  className='object-cover w-full' />
      <img src={second} alt="" className='object-cover w-full' />
      <img src={eight} alt=""  className='object-cover w-full'/>
      <img src={third} alt=""  className='object-cover w-full'/>
      <img src={forth} alt="" className='object-cover w-full' />
      <img src={six} alt="" className='object-cover w-full' />
      <img src={seven} alt="" className='object-cover w-full' />
  
      </div>
    </div>
  )
}

export default CyberSale
