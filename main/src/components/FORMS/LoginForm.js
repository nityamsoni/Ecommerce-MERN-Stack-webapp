import React from 'react'
import { useState } from 'react';

const initialValues = {
    email: "",
    password: "",
};
const LoginForm = () => {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        console.log(values)
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
 
  return (
    <div className=" flex justify-center mt-6 md:mt-16 h-[115vh] pb-10  ">
      <div>

      <form div className=" w-[80vw] md:w-[65vw] border-b border-gray-900/10 pb-3 p-7 bg-blue-100 rounded-xl shadow-2xl">
  <div class="form-group ">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email"
     value={values.email} onChange={handleInputChange}
      name='email'
      required class="form-control rounded-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group mb-[20px]">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password"
     value={values.password} onChange={handleInputChange}
      name='password' class="form-control rounded-lg" id="exampleInputPassword1" required placeholder="Password"/>
  </div>

  <div class="form-check mb-4 ">
    <input type="checkbox" 
    
     name='checkbox' class="form-check-input mb-5" id="exampleCheck1"/>
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button  type='submit'
  //  onClick={()=> console.log(values)} 
    class="btn btn-primary md:px-7 bg-[#0000ffe8]">Submit</button>
  
</form>


      </div>
    </div>
  )
}


export default LoginForm
