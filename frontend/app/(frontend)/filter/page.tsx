'use client'

import { AccordionDemo } from "@/components/according";
import { CheckboxWithText } from "@/components/check-box";
import { Slider } from "@/components/slider";
import React, { useState } from "react";

interface Props {
  setFilterValues?: any
}

const FilterPage: React.FC<Props> = ({ setFilterValues }) => {
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
    if (filterValue.includes(item)) {
      setFilterValue(filterValue.filter(value => value !== item));
      setFilterValues(filterValue)
    } else {
      setFilterValue([...filterValue, item]);
      setFilterValues(filterValue)

    }
  };


  const handlePriceClick = (item: string) => {
    if (priceValue.includes(item)) {
      setPriceValue(priceValue.filter(value => value !== item));
      setFilterValues(priceValue)
    } else {
      setPriceValue([...priceValue, item]);
      setFilterValues(priceValue)

    }
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

        <AccordionDemo title="Price" accValue={"Brand"}>
          {price.map((item, index) => (
            <CheckboxWithText key={index} value={item} onClick={() => handlePriceClick(item)} />
          ))}
        </AccordionDemo>

        <AccordionDemo title="Color" accValue={"Color"}>
          {color.map((item, index) => (
            <CheckboxWithText key={index} value={item} onClick={() => handlePriceClick(item)} />
          ))}
        </AccordionDemo>

        <AccordionDemo title="Color" accValue={"Color"}>
          {color.map((item, index) => (
            <CheckboxWithText key={index} value={item} onClick={() => handlePriceClick(item)} />
          ))}
        </AccordionDemo>
        <AccordionDemo title="Color" accValue={"Color"}>
          {color.map((item, index) => (
            <CheckboxWithText key={index} value={item} onClick={() => handlePriceClick(item)} />
          ))}
        </AccordionDemo>
      </div>
    </div>
  );
};

export default FilterPage;
