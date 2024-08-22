import Link from "next/link";

import { titleFont } from "@/config";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex items-center justify-between w-full px-5">
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link
          className="p-2 m-2 transition-all rounded-md hover:bg-gray-100"
          href={"/category/men"}
        >
          Men
        </Link>

        <Link
          className="p-2 m-2 transition-all rounded-md hover:bg-gray-100"
          href={"/category/women"}
        >
          Women
        </Link>

        <Link
          className="p-2 m-2 transition-all rounded-md hover:bg-gray-100"
          href={"/category/kids"}
        >
          Kids
        </Link>
      </div>

      <div className="flex items-center">
        <Link href={"/search"} className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href={"/cart"} className="mx-2">
          <div className="relative">
            <span className="absolute px-1 text-xs font-bold text-white bg-blue-700 rounded-full -top-2 -right-2">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button className="p-2 m-2 transition-all rounded-md hover:bg-gray-100">
          Menu
        </button>
      </div>
    </nav>
  );
};
