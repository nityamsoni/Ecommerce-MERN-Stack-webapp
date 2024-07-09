import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiTwotoneDelete } from 'react-icons/ai'
import { remove } from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast'
import { NavLink } from 'react-router-dom'
import CheckoutModaal from '../components/Modaal/CheckoutModaal'

export const Cart = () => {

  const [showmodal , setshowmodal] = useState(false)
  let cart = useSelector(state => state.cartslice);
 
  const dispatch = useDispatch()
  

  function removeFromCart(id) {
    dispatch(remove(id))
    toast.error('Remove from cart')
  }
  const [TotalAmt, setTotalAmt] = useState(0)

  useEffect(() => {

    cart.length > 0 && setTotalAmt(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart]);
 
  

 //cartitem save in local storage

//  let cartitem  = cart.map((single)=> single)
//   useEffect(()=>{
//     localStorage.setItem("cart"  ,cartitem )
//   },[cart])


  return (
    <div className='flex justify-center '>

      <div>
        {
          cart.length === 0 &&
          <div className='flex flex-col justify-center align-middle  my-[300px] gap-3'>
            <div className='text-[19px] mx-auto'>cart is empty</div>
            <NavLink to={'/'}>
              <button className='bg-[#3b55ebea] text-white p-2 rounded-lg'>GO to Home page</button>
            </NavLink>
          </div>
        }



        <div className='fex w-[100%] '>
          {
            cart.length > 0 &&
            // MAIN CONTAINER
            <div className='flex  justify-between gap-3  w-screen'>

 {/* /////////part 1 */}
            
              <div className=' md:ml-14 w-[60%] md:w-[50%] flex flex-col  '>
                {
                  cart.map((single, index) => {
                    return <NavLink to={`/product/${single.id}`} key={index} className=' rounded-xl flex gap-8 hover:shadow-2xl hover:border-b-[10px] border-b-[#a59e9ea5] py-9 mt-14 hover:scale-105 duration-700 '>
                      <div className='w-[20%] md:w-[20%] flex flex-col ml-4 '>
                        <img src={single.image} alt="image" />
                      </div>
                      <div className='w-[50%] my-12 '>
                        <div className=' text-[12px] md:text-[21px] font-semibold text-center'> {single.title}</div>
                        <div className='mt-3 text-[10px] md:text-[21px] mx-auto text-center text-bold text-slate-500 '>

                          {`${single.description.substring(0, 100)}`} </div>
                        <div className='flex  justify-evenly mt-4 '>
                          <p className='text-green-600'> {`$${single.price}`}</p>
                          <div
                            className='  text-[22px]  text-red-500 '
                            onClick={() => removeFromCart(single.id)} >
                            <AiTwotoneDelete />
                          </div>

                        </div>
                      </div>

                    </NavLink>

                  })}
              </div>



                                                  {/* PART 2 */}
              <div className='w-[37%] h-[35vh] md:h-[55vh]  max-h-[80vh]  bg-blue-50 justify-center  mt-14 fixed  md:right-4 right-2 top-14 rounded-lg md:p-9 p-3 border-green-500 border-4  md:mr-14 mr-0'>
               <div className='uppercase text-[11px] md:text-[19px] text-green-500'>your cart </div> 
                <span className='text-green-500 text-[18px] md:text-[39px] uppercase ml-5 md:ml-3 font-bold'>summery</span>
                <div className='font-bold md:text-[17px] text-[10px] mt-3'>Total Item  : {cart.length}</div>
                {/* PRICE VALU DIV */}
               <div className=' flex absolute bottom-24'>
               <div className=' font-bold mr-3 md:text-[17px] text-[10px] align-baseline' >
                  Total Amount :
                </div>
                <div className=' w-[70px] md:mx-6 mx-[-7px] text-green-600 text-bold md:text-[17px] text-[9px] mr-16 border-b-green-500 border-2 p-1 mb-1 align-baseline'>
                  {
                  ` $ ${TotalAmt.toFixed(2)} `
                  }
                </div>
               
              
                </div> 
                     {/* NAVIGATE TO THE RAGISTER FORM  */}
                <div className='absolute bottom-3 md:bottom-4 focus:animate-plus  md:left-[31%] mx-2 md:mx-0 px-2 md:px-7 py-2 text-white text-[9px] md:text-[16px] bg-green-400
                 rounded-xl shadow-xl  duration-700'>



                {/* <NavLink to={'/ragisterform'}
                > Checkout All Product   </NavLink> */}
                   <button onClick={()=>setshowmodal(true)}>Checkout All Products</button>
  


                </div>
              </div>
              {showmodal && <CheckoutModaal showmodal ={showmodal} setshowmodal = {setshowmodal} />}
            </div>
          }



        </div>

      </div>
    </div>
  )
}

















