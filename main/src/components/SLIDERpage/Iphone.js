import React from 'react'

import watchMain from '../sliderImages/iphone/8296363.jpg'
import second from '../sliderImages/iphone/41b2992029155c502c2ed59aa4e10da4.jpg'
import third from '../sliderImages/iphone/iPhone_13_Pro_Max_(7)_1632411404068_1646471546072.avif'
import forth from '../sliderImages/iphone/iPhone-13-Pro-Max-1.jpg'
import fifth from '../sliderImages/iphone/share.webp'

const Iphone = () => {
  return (
    <div className='w-screen'>
      <div>

      <img src={watchMain} alt=""  className='object-cover w-full'/>
      <img src={second} alt=""  className='object-cover w-full'/>
      <img src={third} alt=""  className='object-cover w-full'/>
      <img src={forth} alt=""  className='object-cover w-full'/>
      <img src={fifth} alt=""  className='object-cover w-full'/>
      </div>
    </div>
  )
}

export default Iphone
