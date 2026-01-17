"use client";

import React from "react";
import { ArrowRight, Map, Menu } from "lucide-react";
import Logo from "@/app/components/header/Logo";
import HeaderLinks from "@/app/components/header/HeaderLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchTripsButton } from "@/app/components/common/SearchTripsButton";

const Header = () => {
  const pathName = usePathname();
  const paths = ["/", "/trasy"];
  const isPathValid = paths.includes(pathName);

  return (
    <div
      className={`fixed rounded-full border-gray-600 border-[1px] bg-white w-[90%] md:w-[85%] xl:w-[65%] top-3 left-1/2 -translate-x-1/2 z-[9999999999]`}
    >
      <div
        className={`py-3 mx-auto max-w-[1150px] pl-5 pr-5 text-my-white flex justify-between items-center`}
      >
        <div className="flex items-center relative h-12">
          <Logo location="header" />
        </div>
        <HeaderLinks pathName={pathName} isPathValid={isPathValid} />
        <div className="flex items-center gap-7">
          <SearchTripsButton />
          <button className={`lg:hidden text-foreground  cursor-pointer flex`}>
            <Menu size={30} className="cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
