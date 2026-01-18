import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface SearchTripsButtonProps {
  customStyles?: string;
}

export const SearchTripsButton = ({ customStyles }: SearchTripsButtonProps) => {
  return (
    <Link
      href="/trasy"
      className={cn(
        `
      px-6 py-2
      relative
      flex items-center gap-2
      group
      font-semibold
      bg-indigo-500
      text-white
      border-[1px] border-indigo-500
      rounded-full
      shadow-[8px_5px_0px_0px] shadow-indigo-300
      transition-all duration-500
      ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
      hover:shadow-[0px_0px_0px_0px]`,
        customStyles,
      )}
    >
      Przeglądaj trasy
    </Link>
  );
};
