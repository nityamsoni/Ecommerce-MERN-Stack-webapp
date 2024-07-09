import React, { useEffect, useState } from 'react'
import { Spiner } from '../components/Spiner';
import { CartItem } from '../components/CartItem';
import { SwiperSlider } from '../components/SwiperSlider';
import { useLocation } from 'react-router-dom';
import PriceRange from './PriceRange';



const API_URL = "https://fakestoreapi.com/products";



export const AllProduct = () => {
  const location = useLocation
  const [post, setpost] = useState([])
  const [loading, setloading] = useState(false)
  const [value, setvalue] = useState(0)


  async function fetchData() {
    setloading(true)
    let response = await fetch(API_URL);
    let data = await response.json();
    setpost(data)
    // console.log('data is printing');
    setloading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

//function for when range value has been change 
function ChangeHanddler(e){
  setvalue(e.target.value);
//  post.filter((single)=> single.price == value )
}

  //  console.log(post);
  return (
    <div>



      <div className=' w-[100%] mt-[-2px] md:py-[150px] h-full  max-w[100px]  gap-8 flex flex-wrap justify-center mx-auto relative'>
        <div className='absolute top-[-25px] left-[2%]    md:top-4%]  md:left-[5%]'>
          {/* ////////////////////////////// RANGE ///////////////////// */}
          {/* PRODUCTS ACCORDING  INPUT RANGE  */}

          <div className='relative'>
            <div className=' md:text-[17px] text-green-400'>{`$${value}`}</div>
            <div className=''>



              <label className='mr-3  border-blue-500 border-1 text-blue-600 text-[15px] md:text-[17px]' htmlForFor="volume">Price Range </label>
              <input type="range" id="volume" step={5} name="volume" value={value} onChange={(e) =>ChangeHanddler(e)} min="0" max="1001" className='w-[160px] md:w-[250px]' />

              {/* <div onClick={searchHandler}
               className='absolute top-[17px] left-[105%] border-2 border-white px-3 bg-green-400 text-white rounded-lg shadow-md'>search</div> */}


            </div>
          </div>

          {/*  */}
        </div>
        {loading ? (<Spiner />) :

 value > 0 ? (
  post.filter((single)=> single.price <= value).map((item, index) => {
    return <CartItem
      className={'w-full '}
      key={item.id} item={item} />
  })
 )
 
 
 :   (post.map((item, index) => {
  return <CartItem
    className={'w-full '}
    key={item.id} item={item} />
}))
}




       

      </div>


    </div>


  )
}
