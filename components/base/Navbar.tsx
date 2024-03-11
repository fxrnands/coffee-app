import { RiShoppingBasketLine } from "react-icons/ri";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { SlBasket } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";

const Navigation = [
  { icon: <GoHome />, alt: "home", href: "#", size: "text-2xl" },
  {
    icon: <RiShoppingBasketLine />,
    alt: "product",
    href: "#",
    size: "text-xl",
  },
  { icon: <SlBasket />, alt: "cart", href: "#", size: "text-xl" },
  { icon: <FaRegBell />, alt: "bell", href: "#", size: "text-[22px]" },
  {
    icon: <IoEllipsisHorizontalCircleOutline />,
    alt: "ellipsis",
    href: "#",
    size: "text-xl",
  },
];

export default function Navbar() {
  return (
    <div className="bottom-0 sticky w-full">
      <div className="mx-auto max-w-[28rem]">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 border bg-white rounded-sm items-center justify-center sm:items-stretch">
            <div className="space-x-10 sm:flex">
              {Navigation.map((item, idx) => (
                <Link
                  href={item.href}
                  key={idx}
                  className={`inline-flex items-center ${item.size} px-1 pt-1 font-medium text-gray-900`}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
