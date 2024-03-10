import { First, Second, Third } from "@/assets";
import Image from "next/image";
import React from "react";
import { ProductData } from "@/utils/dummy";

const BestProduct = () => {
  const badge = (index: number) => {
    if (index === 0) {
      return First;
    } else if (index === 1) {
      return Second;
    } else {
      return Third;
    }
  };
  return (
    <div className="flex space-x-3.5">
      {ProductData.slice(0, 3).map((item, index) => (
        <div key={index} className="border shadow-md rounded-md p-3">
          <div className="w-[92px] flex relative items-center overflow-hidden h-[92px]">
            <Image src={badge(index)} className="absolute top-0" alt="" />
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt=""
              className="object-cover object-center h-full w-full"
            />
          </div>
          <p className="font-bold text-center text-sm pt-2">
            {item.productName}
          </p>
          <p className="text-sm pt-1 text-center text-gray-400">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BestProduct;
