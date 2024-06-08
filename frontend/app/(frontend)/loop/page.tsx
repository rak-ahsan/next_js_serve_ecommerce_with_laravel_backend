import InfinitePosts from "@/components/loop";
import { loop } from "@/data/route";
import React from "react";

const page = async () => {
  const response = await loop(1);

  return (
    <div>
      <InfinitePosts response={response} />
    </div>
  );
};

export default page;
