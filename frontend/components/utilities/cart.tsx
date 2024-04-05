"use client";
import { useCart } from "@/context/cart-context";
import { ShoppingCart } from "lucide-react";
import React from "react";

interface Props {
  product: any;
}
const CartIcon: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <ShoppingCart onClick={() => addToCart(product)} />
    </div>
  );
};

export default CartIcon;
