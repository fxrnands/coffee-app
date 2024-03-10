import React from "react";
import Image from "next/image";
import { Search } from "@/assets";

const SearchComponent = () => {
  return (
    <div className="flex justify-between items-center">
      <input
        placeholder="Search Product"
        className="border w-full rounded-md outline-none py-1 px-3"
      />
      <button className="ml-2">
        <Image src={Search} alt="" width={35} height={35} />
      </button>
    </div>
  );
};

export default SearchComponent;
