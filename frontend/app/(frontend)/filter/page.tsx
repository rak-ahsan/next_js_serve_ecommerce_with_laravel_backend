'use client'

import { AccordionDemo } from "@/components/according";
import { CheckboxWithText } from "@/components/check-box";
import { Slider } from "@/components/slider";
import React, { useState, useEffect } from "react";

interface Props {
  setFilterValues?: any
  setPriceValues?: any
}

const FilterPage: React.FC<Props> = ({ setFilterValues, setPriceValues }) => {
  const [newValue, setNewValue] = useState([100, 1000]);
  const [filterValue, setFilterValue] = useState<string[]>([]);
  const [priceValue, setPriceValue] = useState<string[]>([]);

  const value = [
    'rakib',
    'karim',
    'pabuni',
    'serabuni'
  ];

  const price = [
    '1000',
    '5000',
    '7000',
    '15000'
  ];

  const color = [
    'red',
    'blue',
    'yellow',
    'purple'
  ];

  const handleCheckboxClick = (item: string) => {
    setFilterValue(prevFilterValue => {
      const newFilterValue = prevFilterValue.includes(item)
        ? prevFilterValue.filter(value => value !== item)
        : [...prevFilterValue, item];

      setFilterValues(newFilterValue);
      return newFilterValue;
    });
  };

  const handlePriceClick = (item: string) => {
    setPriceValue(prevPriceValue => {
      const newPriceValue = prevPriceValue.includes(item)
        ? prevPriceValue.filter(value => value !== item)
        : [...prevPriceValue, item];

        setPriceValues(newPriceValue);
      return newPriceValue;
    });
  };

  return (
    <div className="lg:h-screen overflow-y-scroll" style={{ scrollbarWidth: "thin", scrollbarColor: "transparent transparent" }}>
      <div className="mt-4 mb-2 lg:w-72 ">
        <Slider
          defaultValue={[100, 500]}
          max={1000}
          min={100}
          step={1}
          onValueChange={(value) => setNewValue(value)} />
        <p className="mt-3">
          ৳ {newValue.join(" - ৳ ")}
        </p>
      </div>

      <div className="mt-2 mb-2 lg:w-72 " >
        <AccordionDemo title="Brand" accValue={"Brand"}>
          {value.map((item, index) => (
            <CheckboxWithText key={index} value={item} onClick={() => handleCheckboxClick(item)} />
          ))}
        </AccordionDemo>

        <AccordionDemo title="Price" accValue={"Price"}>
          {price.map((item, index) => (
            <CheckboxWithText key={index} value={item} onClick={() => handlePriceClick(item)} />
          ))}
        </AccordionDemo>

        <AccordionDemo title="Color" accValue={"Color"}>
          {color.map((item, index) => (
            <CheckboxWithText key={index} value={item} onClick={() => handleCheckboxClick(item)} />
          ))}
        </AccordionDemo>
      </div>
    </div>
  );
};

export default FilterPage;
