"use client";
import { useCart } from "@/context/cart-context";
import { Trash } from "lucide-react";
import React from "react";

const CartPage = () => {
  const { cart } = useCart();
  const { removeFromCart } = useCart();


  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Your Cart {cart.length}</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 py-2 px-4">Name</th>
            <th className="border border-gray-200 py-2 px-4">Price</th>
            <th className="border border-gray-200 py-2 px-4">Quantity</th>
            <th className="border border-gray-200 py-2 px-4">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-200 py-2 px-4">{item.email}</td>
              <td className="border border-gray-200 py-2 px-4">
                ${item.id}
              </td>
              <td className="border border-gray-200 py-2 px-4">
                {item.quantity}
              </td>
              <td className="border border-gray-200 py-2 px-4">
                ${item.id * item.quantity}
              </td>
              <td onClick={() => removeFromCart(item.id)}>
                <Trash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
