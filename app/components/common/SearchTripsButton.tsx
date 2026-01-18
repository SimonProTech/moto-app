import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Route } from "lucide-react";

interface SearchTripsButtonProps {
  customStyles?: string;
  type?: "header" | "button";
}

export const SearchTripsButton = ({
  customStyles,
  type = "button",
}: SearchTripsButtonProps) => {
  return (
    <Link
      href="/trasy"
      className={cn(
        `
      px-6 py-2
      relative
      flex items-center
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
      <span className={`${type === "header" ? "hidden sm:block" : ""} `}>
        Przeglądaj trasy
      </span>
      <Route
        className={`${type === "header" ? "sm:hidden block" : "hidden"}`}
        size={22}
      />
    </Link>
  );
};
