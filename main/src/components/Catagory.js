import React from 'react'
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Spiner } from './Spiner';
import { CartItem } from './CartItem';


export const Catagory = () => {
    const location = useLocation();
const catagory =      location.pathname.split('/').at(-1);

    // console.log(catagory);
    const API_URL = `https://fakestoreapi.com/products/category/${catagory}`
    const [post, setpost] = useState([])
    const [loading, setloading] = useState(false)
  
    async function fetchData() {
      setloading(true)  
      let response = await fetch(API_URL);
      let data =  await response.json();
      setpost(data)
    //   console.log('data is printing');
     
      setloading(false)
    }
  
    useEffect(() => {
      fetchData()
    }, [])
    // console.log(post);

  return (
    <div>
                    <h3 className=' uppercase justify-center flex  border-b-4 pb-3 w-[50%]  mt-14 opacity-70 font-bold text-[20px] md:text-[30px] mx-auto'>{catagory}</h3>
                    




      <div className=' w-[100%] mt-[-2px] md:py-14 h-full min-h-[100vh]  max-w[100px]  gap-8 flex flex-wrap justify-center mx-auto '>
        {loading ? (<Spiner />) :

          (post.map((item, index) => {
            return <CartItem

              className={'w-full '}
              key={item.id} item={item} />
          }))}

      </div>
  
    </div>
  )
}
