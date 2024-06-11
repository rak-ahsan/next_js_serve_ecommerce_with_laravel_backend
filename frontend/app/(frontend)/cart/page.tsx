// "use client";
// import { useCart } from "@/context/cart-context";
// import { Trash } from "lucide-react";
// import React from "react";

// const CartPage = () => {
//   const { cart } = useCart();
//   const { removeFromCart } = useCart();


//   return (
//     <div className=" mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Your Cart {cart.length}</h1>
//       <table className="table-auto border-collapse border border-gray-200 overflow-hidden">
//         <thead>
//           <tr>
//             <th className="border border-gray-200 py-2 px-4">Name</th>
//             <th className="border border-gray-200 py-2 px-4">Price</th>
//             <th className="border border-gray-200 py-2 px-4">Quantity</th>
//             <th className="border border-gray-200 py-2 px-4">Subtotal</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cart.map((item) => (
//             <tr key={item.id}>
//               <td className="border border-gray-200 py-2 px-4">{item.email}</td>
//               <td className="border border-gray-200 py-2 px-4">
//                 ${item.id}
//               </td>
//               <td className="border border-gray-200 py-2 px-4">
//                 {item.quantity}
//               </td>
//               <td className="border border-gray-200 py-2 px-4">
//                 ${item.id * item.quantity}
//               </td>
//               <td onClick={() => removeFromCart(item.id)}>
//                 <Trash />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="mt-6">
//         <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


"use client"
import React from 'react';
import { useCart } from "@/context/cart-context";
import { Trash } from "lucide-react";
import Image from 'next/image';

function CartPage({ cartDesign }) {
  const { cart } = useCart();
  const { removeFromCart } = useCart();
  const { increaseQuantity } = useCart()
  const { decreaseQuantity } = useCart()

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * 10, 0);
  };
  return (
    <div className=" bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className={`mx-auto max-w-5xl justify-center px-6 ${cartDesign ? '' : 'md:flex'} md:space-x-6 xl:px-0`}>
        <div className="rounded-lg md:w-2/3 lg:w-full p-6">
          {cart.map((item, key) => (

            <div key={item.id} className={`justify-between mb-6 rounded-lg bg-white p-6 shadow-md ${cartDesign ? '' : 'sm:flex'} sm:justify-start`}>
              <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />


              <div className={`sm:ml-4 ${cartDesign ? '' : 'sm:flex'} sm:w-full sm:justify-between`}>
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{item.email}</h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className={`mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6`}>
                  <div className="flex items-center border-gray-100">
                    <span onClick={() => decreaseQuantity(item.id)} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                    <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={item.quantity} min="1" />
                    <span onClick={() => increaseQuantity(item.id)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{item.quantity * 10} $</p>
                    <svg onClick={() => removeFromCart(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Sub total */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 lg:w-full ">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">{calculateTotalPrice()}</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

