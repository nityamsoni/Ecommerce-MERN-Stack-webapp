import React from 'react'

import watchMain from '../sliderImages/plan-discount/4274928.jpg'
import second from '../sliderImages/plan-discount/DY4-xGjWsAANZPu.jpg'
import third from '../sliderImages/plan-discount/domestic-flights-coupons.jpg'
import forth from '../sliderImages/plan-discount/istockphoto-185087802-612x612.jpg'
import fifth from '../sliderImages/plan-discount/offerbanner254_1641273375.webp'
import six from '../sliderImages/plan-discount/OJKD210.jpg'


const PLanDiscount = () => {
  return (
    <div className='w-screen'>
      <div>
        
      <img src={watchMain} alt=""  className='object-cover w-full'/>
      <img src={second} alt="" className='object-cover w-full' />
      <img src={fifth} alt="" className='object-cover w-full' />
      <img src={six} alt=""  className='object-cover w-full'/>
      <img src={third} alt=""  className='object-cover w-full'/>
      <img src={forth} alt=""  className='object-cover w-full'/>
     
      </div>
    </div>
  )
}

export default PLanDiscount
