import React from "react";
import Image from "next/image";
import { Search } from "@/assets";

const SearchComponent = () => {
  return (
    <div className="flex mt-2">
      <input className="border rounded-md outline-none py-1 px-3 w-full" />
      <button className="px-1.5">
        <Image src={Search} alt="" width={35} height={35} />
      </button>
    </div>
  );
};

export default SearchComponent;
