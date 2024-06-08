"use client";

import { Slider } from "@/components/slider";
import React, { useState } from "react";

const page = () => {
  const [newValue, setNewValue] = useState<any>([33, 500]);
  return (
    <div className="mt-4 w-72">
      <Slider
        defaultValue={[33, 500]}
        max={500}
        step={1}
        onValueChange={(value) => setNewValue(value)}
      />
      {newValue.join(" , ")}
    </div>
  );
};

export default page;
