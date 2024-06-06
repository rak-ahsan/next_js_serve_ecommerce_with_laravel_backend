import InfinitePosts from "@/components/loop";
import Maps from "@/components/map";
import { loop } from "@/data/route";
import React from "react";

const page = async () => {
  const response = await loop(1);

  return (
    <div>
      <Maps posts={response} />
      <InfinitePosts />
    </div>
  );
};

export default page;
