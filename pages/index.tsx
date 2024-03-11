import Image from "next/image";
import React from "react";
import { BackgroundCoffee } from "@/assets";
import { ShopSection } from "@/components/section";

const Index = () => {
  return (
    <div>
      <div className="relative">
        <Image src={BackgroundCoffee} alt="" className="w-full h-full" />
        <div
          className="bg-black absolute top-0 w-full h-full opacity-40"
          style={{ zIndex: "1" }}
        />
      </div>
      <div className="relative bottom-16 z-10">
        <ShopSection />
      </div>
    </div>
  );
};

export default Index;
