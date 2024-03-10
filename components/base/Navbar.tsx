import { Bell, Coupon, Ellipsis, Home, Order } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Navigation = [
  { icon: Home, alt: "home", href: "#" },
  { icon: Coupon, alt: "coupon", href: "#" },
  { icon: Order, alt: "order", href: "#" },
  { icon: Bell, alt: "bell", href: "#" },
  { icon: Ellipsis, alt: "ellipsis", href: "#" },
];

export default function Navbar() {
  return (
    <div className="bottom-3 sticky w-full">
      <div className="mx-auto max-w-sm sm:max-w-xl">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 border bg-white rounded-md items-center justify-center sm:items-stretch">
            <div className="space-x-10 sm:flex">
              {Navigation.map((item, idx) => (
                <Link
                  href={item.href}
                  key={idx}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                >
                  <Image src={item.icon} alt={`${item.alt}-icon`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
