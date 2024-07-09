import React from 'react'
import './SelectFilter.css'
import { NavLink } from 'react-router-dom'


export const SelectFilter = () => {

  return (
    <div className='flex justify-evenly md:w-[70%] w-[91%] links py-3 rounded-lg mb-5  text-[10px] md:text-[15px]
    '>



      <div className='hover:scale-[1.1] hover:text-yellow-200 duration-500' ><NavLink to={"/catagories/men's clothing"}>men's clothing</NavLink> </div>
      <div className='hover:scale-[1.1] hover:text-yellow-200 duration-500' ><NavLink to={"/catagories/women's clothing"}>women's clothing</NavLink> </div>
      <div className='hover:scale-[1.1] hover:text-yellow-200 duration-500' ><NavLink to={"/catagories/jewelery"}>jewelery</NavLink> </div>
      <div className='hover:scale-[1.1] hover:text-yellow-200 duration-500'  ><NavLink to={"/catagories/electronics"}>electronics</NavLink> </div>


    </div>
  )
}
