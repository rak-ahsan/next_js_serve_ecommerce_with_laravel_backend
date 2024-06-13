import ModalsProduct from "@/components/modal-procustc";
import ProductPage from "@/components/product-page";
import CartIcon from "@/components/utilities/cart";
import { NextResponse } from "next/server";

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: "no-store"
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }

  return res.json();
}


const page = async () => {

  const data = await getData()
  return (
    <ProductPage data={data} />
  );
};

export default page;
