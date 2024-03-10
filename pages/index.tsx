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

const Index: NextPage = () => {
  return (
    <>
      <Carousel item={ImageSlider} />
      <div className="mt-4 max-w-sm mx-auto">
        <h1 className="font-bold text-lg">Search Products</h1>
        <Search />
      </div>
      <div className="bg-gray-100 pt-4 pb-6 mt-6">
        <div className="max-w-sm mx-auto">
          <h1 className="font-bold text-lg mb-4">Mega Discount</h1>
          <PromoSlider item={ImageSlider} />
        </div>
      </div>
      <div className="max-w-sm mx-auto mt-6">
        <h1 className="font-bold text-lg mb-4">Best Seller</h1>
        <BestProduct />
      </div>
      <div className="max-w-sm mx-auto mt-8">
        <div className="flex items-center  mb-4 justify-between">
          <h1 className="font-bold text-lg">Product List</h1>
          <Image
            src={Arrow}
            height={10}
            className="h-5 w-5"
            width={10}
            alt=""
          />
        </div>
        <ProductList />
      </div>
    </>
  );
};

export default Index;
