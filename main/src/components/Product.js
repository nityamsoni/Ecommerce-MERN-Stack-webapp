import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { add, remove } from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { BsCartXFill } from 'react-icons/bs'
import { AllProduct } from './AllProduct'
import { Spiner } from './Spiner'// import { RelatedProduct } from './RelatedProduct'



export const Product = () => {
    const [loading, setloading] = useState(false);
    const [allpost, setallpost] = useState([]);
 
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartslice)
    // const API_URL = "https://fakestoreapi.com/products";
    const { productId } = useParams();
    const [post, setpost] = useState({});

    async function fetchsingledata() {
        setloading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const data = await response.json();
        setpost(data)
        setloading(false)
    }
  

   
    const addCart = () => {
        dispatch(add(post))
        toast.success('Item has been added in cart ')
    }

    const removeCart = () => {
        dispatch(remove(post.id))
        toast.error('Item remove from cart ')
    }
    


  useEffect(() => {
    fetchsingledata();

  }, [post])
 

    return (
        <div className=' w-screen flex flex-col justify-center  bg-blue-50 auto   '>

            {/* {post !== {}} */}
            <div className=' w-[70%] md:w-[60%]   mt-10 mx-auto'>
                <div className='uppercase text-center font-bold text-xl border-b-4 pb-3 '>
                    {post.title}
                </div>
                <div className=' w-[80%] md:w-[46%]   mx-auto mt-8 hover:scale-105 shadow-xl hover:shadow-2xl duration-700'>
                    <img src={post.image} className='h-[410px rounded-xl mx-auto' />
                </div>
                <div className='   mt-4 pt-2 md:mt-3 text-[20px] text-green-500   flex justify-between mb-2'>
                    <span className='text-green-500 align-baseline text-center mt-4'>$    {`${post.price}`}</span>

                    <div className='align-baseline my-auto mb-3 text-center'>


                        {
                            cart.some((p) => p.id === post.id) ?
                                (<button
                                    className=' mt-4 md:mt-0 text-[14px] borer-2 border-[#2c2b2b]  p-2 align-baseline flex border-3px bg-slate-200 rounded-xl  focus:border-2 gap-3 '
                                    onClick={() => removeCart()}> <BsCartXFill className='flex align-baseline mt-1' /> Remove From Cart</button>) :
                                (<button
                                    className=' mt-4 md:mt-0 max-w-[160px] text-[14px]  pl-8 text-end border-[#2c2b2b] p-2 align-baseline flex border-3px bg-slate-200 rounded-xl gap-3 focus:border-2  '
                                    onClick={() => addCart()}> <BsFillCartCheckFill className='flex align-baseline mt-1' />  Add TO Cart</button>)
                        }
                    </div>
                </div>
                <div className='opacity-90 text-left w-full  text-[11px'>
                    {post.description}
                </div>
            </div>
            {/* REALAATED PRODUCTE TO BUY........................  */}

            <div>

                           <h3 className='justify-center flex  border-b-4 pb-3 w-[50%]  mt-24 opacity-70 font-bold 
                           text-[20px] mb-8 md:text-[30px] mx-auto'>More PRODUCTS</h3>
                <AllProduct/>

               
                  {/* <RelatedProduct category  = {post.category} /> */}
                


                      {/* AFTER FILTER RETURN ALL CATAGORY ITEM */}
                {/* {
                     (allpost.map((item, index) => {
                        return <CartItem
                          className={'w-full '}
                          key={item.id} item={item} />
                      }))
                } */}
                    

            </div>

        </div>
    )
}
