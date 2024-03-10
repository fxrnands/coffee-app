import React from "react";
import { ProductData } from "@/utils/dummy";
import Image from "next/image";
import { ShoppingBag } from "@/assets";

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {ProductData.slice(0, 10).map((item, index) => (
        <div key={index} className="border shadow-md rounded-md p-3">
          <div className="w-[6rem] flex items-center overflow-hidden h-[6rem]">
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt=""
              className="object-cover object-center h-full w-full"
            />
          </div>
          <p className="font-bold text-sm pt-2">{item.productName}</p>
          {item.stock === 0 ? (
            <p className="pt-8 font-bold text-center text-gray-400">
              Out of Stock
            </p>
          ) : (
            <p className="text-sm pt-1 text-gray-400">{item.price}</p>
          )}
          {item.stock > 0 && (
            <button className="bg-white text-black shadow-md items-center px-2 flex py-2 font-bold text-[10px] gap-1 w-full rounded-full mt-2">
              <Image src={ShoppingBag} className="w-4 h-4" alt="" />
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
