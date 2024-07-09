import React from 'react'
import '../index.css'

export const Spiner = () => {
  return (
    <div className='flex flex-col justify-center align-middle absolute top-[50%] left-[35%] md:top-[50%] md:left-[50%] gap-7 mx-auto'>
        <div className="custom-loader"></div>
        <div className='text-[26px] '>Loading ....</div>
    </div>
  )
}
