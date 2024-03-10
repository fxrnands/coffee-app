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
        <div key={index} className="border relative shadow-md rounded-md p-3">
          <Image src={badge(index)} className="absolute top-1 left-1" alt="" />
          <div className="w-[92px] flex  items-center overflow-hidden h-[92px]">
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt=""
              className="object-cover object-center h-full w-full"
            />
          </div>
          <p className="text-center text-sm pt-2">{item.productName}</p>
          <p className="text-sm pt-1 text-center font-bold text-[16px]">
            Rp{item.price.toLocaleString("ko-KR")}
          </p>
          <p className="text-gray-400 text-center mt-3 text-[10px]">
            {item.sold} sold
          </p>
        </div>
      ))}
    </div>
  );
};

export default BestProduct;
