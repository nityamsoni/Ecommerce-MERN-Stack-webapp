import React from 'react'



import { NavLink, Navigate, useNavigate } from 'react-router-dom'



export const CartItem = ({ item }) => {

    const id = item.id;
  

    let title = item.title.substring(0, 16)
    // let Fulldescription = item.description ;
    let description = item.description.substring(0, 88)



    return (
    
    <NavLink to={`/product/${id}`}   className={'h-[297px] w-[40%] md:w-1/5 md:h-[400px] flex flex-col border-[2px] border-[#575555af] rounded-2xl px-2  hover:scale-105 duration-700 relative shadow-lg hover:shadow-2xl md:mt-0 mt-8 mr-3 bg-white'}
   
    >
        <div className='  ' 
      
         >
            <div className=' mx-auto mt-3 text-center  text-[14px] md:text-[21px] font-semibold '>
                {`  ${title}...`}
            </div>

            <div className=' mt-3  mx-auto text-center  text-[9px] md:text-[12px] text-bold text-slate-500'>
                {`  ${description}...`}
            </div>


            <div className='w-[85px] md:w-[150px]  mx-auto mt-3 mb-14'>

                <img src={item.image} alt="image" className='' />
            </div>


            <div className='flex justify-between my-3 px-2 w-[95%] absolute bottom-0 right-2'>
                <div className='text-[#56af56] font-semibold my-auto'>
                    {`$${item.price}`}
                </div>
                 <div>
                    {/* {rating} */}
                 </div>

            </div>

        </div>
    </NavLink>
    )

}