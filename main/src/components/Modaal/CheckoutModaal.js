import React from 'react'
import { NavLink } from 'react-router-dom'

const CheckoutModaal = ({ showmodal, setshowmodal }) => {

  return (
    <div className='w-[100vw] h-[100vh]  ' >
      <div className="overlay fixed top-0 left-0 bottom-0 right-0 bg-[#60585896]">

        <div className="modal-container text-[10px] md:text-[15px] w-[80%] md:w-[40%] h-[33%] md:h-[25%] md:min-h-[37%] bg-white flex flex-col text-center mt-[60%]  md:mt-[15%] p-6 mx-auto rounded-xl select-none shadow-2xl  relative">

          <div className=' md:w-[8%] w-[22%] text-start text-[18px] mb-1 font-semibold p- cursor-pointer hover:text-yellow-300 duration-700 border-b-[2px] border-[black]' onClick={() => setshowmodal(!showmodal)}>Back</div>
          <p className='opacity-70 mt-3   '>Before you can proceed with the checkout process,For the next steps, please ensure you either log in or register, and complete all required fields. New users can register by providing necessary details.  Filling mandatory information guarantees a seamless process ahead. Thank you for choosing us; we look forward to serving you effectively.</p>


          <div className=' flex justify-around mt-6 md:mt-10 cursor-pointer '>
            <div className=' hover:scale-110 bg-green-400 text-white rounded-xl shadow-xl  duration-700 px-3 md:px-5 md:py-2 py-2 '>
              <NavLink to={'/loginform'}>Login....</NavLink>
            </div>

            <div className=  'hover:scale-110 bg-green-400 text-white rounded-xl shadow-xl  duration-700  px-3 md:px-5 md:py-2 py-2'>
              <NavLink to={'/ragisterform'}>Ragister....</NavLink>
            </div>

          </div>
                  
     


        </div>
      </div>
    </div>
  )
}

export default CheckoutModaal

