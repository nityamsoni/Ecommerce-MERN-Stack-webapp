import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BsCartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { MdOutlineAddCircle } from 'react-icons/md'
import { SelectFilter } from './dropdown/SelectFilter';
import logo from '../images/logo.png'
import {BsArrow90DegLeft} from 'react-icons/bs'


export const Navbar = () => {
  let cart = useSelector((state) => state.cartslice)
  const navigate = useNavigate();
  return (


    <div className=' bg-[#191345] relative      '>
      <div className='max-w-[900px] pt-2   flex   justify-around md:justify-between mx-auto text-white'>
        <div className='my-auto'>
          <NavLink to={'/'}>  <img src={logo} className='h-14 bg-transparent scale-150  rounded-sm' alt=" logo.svg " /></NavLink>

          {/* <NavLink to={'addproduct'} className={'absolute top-7 right-5 text-[20px] hover:text-green-400 duration-700'}> <MdOutlineAddCircle/> </NavLink> */}
        </div>
        <div className=' flex '>
          <div className='text-[15px] md:text-[20px] p-2 pr-3' > <NavLink to={'/'} >  <button>Home</button></NavLink></div>
          <div className='mt-[3px] p-2  pl-3 text-[18px] md:text-[26px] relative '>
            <div className='absolute mr-2 top-[-7px] z-2 text-[10px] md:text-[16px] text-red-500 md:pl-5 pl-2 animate-bounce select-none '>{cart.length > 0 && cart.length}</div>
            <NavLink to={'/cart'}> <BsCartFill />
            </NavLink></div>
        </div>
      </div>




      <div className='text-white absolute top-10 left-0.9 ml-2 mb-[-5px] cursor-pointer select-none focus:text-[12px] text-[12px] md:text-[15px] hover:scale-[1.1] hover:text-yellow-200 duration-500' onClick={() => navigate(-1)}>Back  
       <span className='absolute top-[-7px] left-5  scale-x-125 hover:scale-[1.1] hover:text-yellow-200 duration-500 cursor-pointer'> <BsArrow90DegLeft/></span>
       </div>



    </div>



  )
}
