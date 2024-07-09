import React, { useState } from 'react'

const initialValues = {
    firstName: "",
    lastName: "",
     email: "",
    country: "",
      streetAddress: "",
      city : "",
      region: "",
      postalCode : "",
    // phone: "",  
    // password: "",
};
export const RagisterForm = () => {

    const [ragisterform, setragisterform] = useState(initialValues);

    const handleChange = (e) => {
      

      const { name, value } = e.target;
      setragisterform({
        ...ragisterform,
        [name]: value,
      });
    };

    return (
        <div class=" flex justify-center mt-6 h-[115vh] pb-10  ">

<form action="" >

<div class=" w-[80vw] md:w-[65vw] border-b border-gray-900/10 pb-3 p-7 bg-blue-100 rounded-xl shadow-2xl">
                <h2 class="text-base border-b-2 border-[#5d67ae] font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p class="mt-2 text-sm leading-6 text-gray-600">Fill all details fields htmlfor where you can recieve product </p> 



                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {/* <div class="sm:col-span-3">
                        <label htmlfor="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                        <div class="mt-2">
                            <input type="text"
                             name="firstnName" value={ragisterform.firstName} onChange={handleChange}
                             id="first-name" autoComplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div> */}


                    <div class="sm:col-span-3">
                        <label htmlfor="last-name" class="block text-sm font-medium leading-6 text-gray-900">First Name name</label>
                        <div class="mt-2">
                            <input type="text"
                             name="firstName" value={ragisterform.firstName} onChange={handleChange}
                              id="last-name" autoComplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>


                    <div class="sm:col-span-3">
                        <label htmlfor="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                        <div class="mt-2">
                            <input type="text"
                             name="lastName" value={ragisterform.lastName} onChange={handleChange}
                              id="last-name" autoComplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>



                    <div class="sm:col-span-4">
                        <label htmlfor="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email"
                              name="email"  value={ragisterform.email} onChange={handleChange}
                              type="email" autoComplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>



                    <div class="sm:col-span-3">
                        <label htmlfor="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                        <div class="mt-2">
                            <select id="country"
                             name="country"  value={ragisterform.country} onChange={handleChange}
                            autoComplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option>India</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>



                    <div class="col-span-full">
                        <label htmlfor="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                        <div class="mt-2">
                            <input type="text"
                            name="streetAddress"  value={ragisterform.streetAddress} onChange={handleChange}
                             id="street-address" autoComplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>



                    <div class="sm:col-span-2 sm:col-start-1">
                        <label htmlfor="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                        <div class="mt-2">
                            <input type="text"
                             name="city" id="city"  value={ragisterform.city} onChange={handleChange}
                              autoComplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>



                    <div class="sm:col-span-2">
                        <label htmlfor="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                        <div class="mt-2">
                            <input type="text" 
                            name="region"  value={ragisterform.region} onChange={handleChange}
                            id="region" autoComplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>




                    <div class="sm:col-span-2 mt-3">
                        <label htmlfor="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                        <div class="mt-2">
                            <input type="text" 
                            name="postalCode" value={ragisterform.postalCode} onChange={handleChange}  
                            id="postal-code" autoComplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>


                    </div>
                    <button type='submit' class='  p-3 md:p-4 mx-auto flex justify-center  text-white text-[18px] rounded-xl hover:shadow-xl duration-700 w-[90%] text-center  mt-20 mb-20 md:mt-14 focus:scale-105 bg-blue-400'>submit</button>
                </div>

            </div>
            {/* <div onClick={()=>console.log(ragisterform)}>click</div> */}
</form>
             

        </div>
    )
}
