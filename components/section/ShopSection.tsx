import { Coffee } from "@/assets";
import Image from "next/image";
import React from "react";
import { IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { GoClock } from "react-icons/go";
import Link from "next/link";

const ShopSection = () => {
  return (
    <div className="max-w-[22rem] mx-auto">
      <div>
        <div className="bg-white relative border shadow-md rounded-md text-center">
          <div className="flex justify-center">
            <div className="flex items-center justify-center border shadow-md w-32 absolute bottom-48 rounded-full">
              <Image
                src={Coffee}
                width={100}
                height={100}
                className="w-32 rounded-full h-32"
                alt="profile-picture"
              />
            </div>
          </div>
          <div className="mt-24 pb-10">
            <h1 className="font-bold text-xl">Sample Coffee, Bekasi</h1>
            <div className="px-4 flex items-center pt-4">
              <IoLocationOutline width={20} />
              <p className="text-sm font-light ml-2">
                Jl. Raya Jatibening no. 29 RT.06 RW.03
              </p>
            </div>
            <div className="px-4 flex mt-3 items-center">
              <GoClock width={10} />
              <p className="text-sm font-light ml-2">
                <span className="font-bold text-red-600">Buka</span>, 13.00 WIB
                - 23.00 WIB
              </p>
            </div>
            <div className="px-4 flex mt-3 items-center">
              <IoLogoWhatsapp width={10} />
              <p className="text-sm text-red-600 ml-2 font-bold">
                Hubungi Kami
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md px-4 py-4 flex justify-between mt-4 relative border rounded-md">
          <div className="flex items-center">
            <IoMdHelpCircleOutline />
            <p className="ml-2">Cara Order</p>
          </div>
          <div className="font-bold text-red-600">Lihat Tutorial</div>
        </div>
        <Link
          href={"/home"}
          className="bg-white shadow-md px-4 py-4 flex justify-center mt-4 relative border rounded-md"
        >
          <p className="font-bold">ORDER NOW!</p>
        </Link>
      </div>
    </div>
  );
};

export default ShopSection;
