
import {Navbar}  from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import { Product } from './components/Product';
import { Catagory } from './components/Catagory';
import { RagisterForm } from './components/FORMS/RagisterForm';
import LoginForm from './components/FORMS/LoginForm';

// slider path 
import Watch from './components/SLIDERpage/Watch';
import Iphone from './components/SLIDERpage/Iphone';
import HomeApplience from './components/SLIDERpage/HomeApplience';
import PLanDiscount from './components/SLIDERpage/PLanDiscount';
import CyberSale from './components/SLIDERpage/CyberSale';




const App = () => {
  return <>
<div className='bg-blue-50 w-[100vw] overflow-hidden'>
  

<Navbar></Navbar>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path='/product/:productId' element= {<Product/>}/>
    <Route path='/catagories/:catagory' element= {<Catagory/>}/>
    <Route path='/ragisterform' element= {<RagisterForm/>}/>
    <Route path='/loginform' element= {<LoginForm/>}/>
    <Route path='/loginform' element= {<LoginForm/>}/>

                 {/* for homepage slider  */}
                 
                 <Route path='/cyber-sale' element= {<CyberSale/>}/>
                 <Route path='/watch-offer' element= {<Watch/>}/>
                 <Route path='/iphone-offer' element= {<Iphone/>}/>
                 <Route path='/homeaplience-offer' element= {<HomeApplience/>}/>
                 <Route path='/plan-discount' element= {<PLanDiscount/>}/>
  
   
   </Routes>
</div>


  
  
  </>;
};



export default App;
