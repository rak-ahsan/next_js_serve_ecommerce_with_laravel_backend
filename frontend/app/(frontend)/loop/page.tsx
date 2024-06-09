import InfinitePosts from "@/components/loop";
import { loop } from "@/data/route";
import Link from "next/link";
import React from "react";

const ProductPage = async () => {
  const response = await loop(1);

  return (
    <div>
      <Link href="/">Home</Link>
      <InfinitePosts response={response.data} />
    </div>
  );
};

export default ProductPage;
