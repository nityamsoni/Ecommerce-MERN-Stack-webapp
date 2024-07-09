// import React from 'react'
// import { Catagory } from './Catagory'
// import { useState ,useEffect } from 'react'
// import { Spiner } from './Spiner'
// import { CartItem } from './CartItem'

// export const RelatedProduct = ({category}) => {


//     const [post, setpost] = useState([])
//     const [loading, setloading] = useState(false)

//     async function fetchallpost() {
//         setloading(true)
//         let response = await fetch( "https://fakestoreapi.com/products");
//         let data = await response.json() ;
//         setpost(data)
//         // console.log('data is printing');
//         setloading(false)
//       }
    
//       useEffect(() => {
//         fetchallpost()
//       })
    
//       const filterpost =   post.filter((single)=>single.category == category) ; 

 

// //  console.log(category);

//   return (
//     <div>
//     {loading ? (<Spiner />) :

// (filterpost.map((item, index) => {
//   return <CartItem
//     className={'w-full '}
//     key={item.id} item={item} />
// }))}

//     </div>
//   )
// }
