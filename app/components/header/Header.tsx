"use client";

import React from "react";
import { Menu } from "lucide-react";
import Logo from "@/app/components/header/Logo";
import HeaderLinks from "@/app/components/header/HeaderLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const paths = ["/", "/trasy"];
  const isPathValid = paths.includes(pathName);

  return (
    <div
      className={`fixed  w-full ${isPathValid ? "bg-black/90" : "bg-white border-b border-gray-border"} z-[9999999999] top-0 left-0`}
    >
      <div
        className={`py-5 mx-auto max-w-[1150px] pl-5 pr-5 text-my-white flex justify-between items-center`}
      >
        <Logo isPathValid={isPathValid} />
        <HeaderLinks isPathValid={isPathValid} />
        <div className="flex items-center gap-7">
          <Link
            href="/trasy"
            className="py-2 shadow-2xl hover:scale-95 font-medium transition-all px-6 rounded-full border border-gray-border bg-ring duration-500 text-foreground"
          >
            Przeglądaj trasy
          </Link>
          <button className="lg:hidden cursor-pointer flex">
            <Menu size={30} className="cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
