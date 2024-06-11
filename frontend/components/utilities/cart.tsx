"use client";
import { useCart } from "@/context/cart-context";
import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import ModalsCart from "../cart-modal";
import CartPage from "@/app/(frontend)/cart/page";

interface Props {
  product: any;
}

const CartIcon: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setOpenModal(true);
  };

  return (
    <div className="hover:bg-green-500">
      <ShoppingCart onClick={handleClick} />
      <ModalsCart open={openModal} setOpenModal={setOpenModal}>
        <CartPage cartDesign={true} />
      </ModalsCart>
    </div>
  );
};

export default CartIcon;

