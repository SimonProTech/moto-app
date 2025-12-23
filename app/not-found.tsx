"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const router = useRouter();
  return (
    <main className="flex relative h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="z-20">
        <h1 className="text-[165px] font-extrabold text-white tracking-tight">
          404
        </h1>
        <p className="mt-4 text-2xl text-gray-200 font-bold">
          Ta strona nie istnieje.
        </p>
        <p className="mt-2 text-md font-medium text-gray-300">
          Może zboczyłeś z trasy. Wróć na główną drogę.
        </p>

        <div className="flex flex-col items-center">
          <Button
            onClick={() => router.back()}
            className="mt-6 text-md cursor-pointer rounded-full p-6 hover:bg-my-white duration-500 hover:shadow-2xl bg-ring text-background transition-all"
          >
            Wróć do poprzedniej strony
          </Button>
          <Link
            className="mt-4 px-6 py-2 text-md cursor-pointer rounded-full duration-300 bg-indigo-500 text-white hover:bg-indigo-600 transition-all"
            href="/"
          >
            Wróć na stronę główną
          </Link>
        </div>
      </div>
      <div className="absolute select-none z-10">
        <Image
          width={600}
          height={400}
          className="opacity-10"
          src="/assets/not-found/not-found.svg"
          alt="Strona nie istnieje"
        />
      </div>
    </main>
  );
};

export default NotFound;
