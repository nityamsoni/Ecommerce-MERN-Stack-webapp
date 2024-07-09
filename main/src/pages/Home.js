
import { SwiperSlider } from '../components/SwiperSlider';
import { AllProduct } from '../components/AllProduct';
import { SelectFilter } from '../components/dropdown/SelectFilter';
const API_URL = "https://fakestoreapi.com/products";



export const Home = () => {

  return (
    <div>


<div className='w-[100vw] mx-auto bg-blue-50 overflow-hidden'>
  <SwiperSlider/>
</div>
<div className=' flex justify-center md:mt-16 mt-12 '>
   <SelectFilter/>
</div>
<div> <AllProduct/></div>




    </div>


  )
}
