"use client";

import React from "react";
import { useMobileMenu } from "@/app/store/openModal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MobileHeader = () => {
  const router = useRouter();
  const { isModalOpen, closeModalFn } = useMobileMenu();

  const handleChangePath = (path: string) => {
    router.push(path);
    closeModalFn();
  };

  return (
    <>
      {isModalOpen ? (
        <div
          onClick={closeModalFn}
          className="absolute -top-6 left-0 w-full z-[999999999] h-full bg-transparent"
        />
      ) : null}
      <div
        className={`lg:hidden w-[90%] md:w-[85%] left-1/2 -translate-x-1/2 fixed z-[9999999999999] bg-my-white rounded-2xl top-24 transition-all overflow-hidden
    ${isModalOpen ? "h-60 border border-gray-border" : "h-0 border-0"}
  `}
      >
        <ul className="flex w-full p-4 flex-col gap-3">
          <li>
            <Button
              variant="fake-btn"
              onClick={() => handleChangePath("/")}
              className={cn(
                `group h-10 cursor-pointer flex w-full items-center justify-between rounded-2xl border border-gray-200 px-5 text-md font-medium text-gray-800 transition-all hover:border-black hover:bg-gray-50`,
              )}
            >
              Start
              <span className="translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Button>
          </li>

          <li>
            <Button
              variant="fake-btn"
              onClick={() => handleChangePath("/trasy")}
              className="group flex h-10 w-full cursor-pointer items-center justify-between rounded-2xl border border-gray-200  px-5 py-2  text-md font-medium text-gray-800 transition-all hover:border-black hover:bg-gray-50"
            >
              Trasy
              <span className="translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Button>
          </li>

          <li>
            <Button
              variant="fake-btn"
              onClick={() => handleChangePath("/kontakt")}
              className="group h-10 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-gray-200  px-5 py-2  text-md font-medium text-gray-800 transition-all hover:border-black hover:bg-gray-50"
            >
              Kontakt
              <span className="translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Button>
          </li>
          <li>
            <Button
              variant="fake-btn"
              onClick={() => handleChangePath("/o-mnie")}
              className="group flex h-10 cursor-pointer w-full items-center justify-between rounded-2xl border border-gray-200  px-5 py-2  text-md font-medium text-gray-800 transition-all hover:border-black hover:bg-gray-50"
            >
              O mnie
              <span className="translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileHeader;
