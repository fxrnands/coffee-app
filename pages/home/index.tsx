import { Search } from "@/components/base";
import {
  Carousel,
  PromoSlider,
  BestProduct,
  ProductList,
} from "@/components/section";
import { NextPage } from "next";
import { ImageSlider } from "@/utils/dummy";
import { Arrow } from "@/assets";
import Image from "next/image";
import React from "react";

const Index: NextPage = () => {
  return (
    <>
      <div className={`sticky top-0 z-10`}>
        <div className={`bg-[#3E3232] py-5 px-5 `}>
          <Search />
        </div>
      </div>
      <div className={`bg-gray-100 pt-6 pb-6`}>
        <div className="max-w-sm mx-auto">
          <h1 className="font-bold text-[20px] mb-4">Mega Discount</h1>
          <PromoSlider item={ImageSlider} />
        </div>
      </div>
      <div className="max-w-sm mx-auto mt-6">
        <h1 className="font-bold text-[20px] mb-4">Best Seller</h1>
        <BestProduct />
      </div>
      <div className="mt-6">
        <Carousel item={ImageSlider} />
      </div>
      <div className="max-w-sm mx-auto mt-8">
        <div className="flex items-center mb-4 justify-between">
          <h1 className="font-bold text-lg">Product List</h1>
          <Image
            src={Arrow}
            height={10}
            className="h-5 w-5"
            width={10}
            alt="more-product"
          />
        </div>
        <ProductList />
      </div>
    </>
  );
};

export default Index;
