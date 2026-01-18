"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/app/components/header/Header";
import Wrapper from "@/app/components/Wrapper";

const NotFound = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">
      <Header />
      <section className="mx-auto lg:px-20 grid lg:pt-0 pt-40 lg:min-h-screen max-w-7xl relative grid-cols-1 lg:grid-cols-2 items-center ">
        {/* LEFT – TEXT */}
        <div className="relative pl-10 z-20">
          <span className="mb-6 block text-sm underline font-medium uppercase tracking-widest text-gray-400">
            Error 404
          </span>

          <h1 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl">
            Nie możemy znaleźć tej strony.
          </h1>

          <p className="mt-6 max-w-md text-lg text-gray-600">
            Wygląda na to, że adres jest nieprawidłowy albo strona została
            przeniesiona.
          </p>

          <div className="mt-10 flex gap-6">
            <button
              onClick={() => router.back()}
              className="border-b-2 cursor-pointer border-black pb-1 text-lg font-medium transition-opacity hover:opacity-60"
            >
              Wróć
            </button>

            <Link
              href="/"
              className="border-b-2 border-indigo-500 pb-1 text-lg font-medium text-indigo-600 transition-opacity hover:opacity-80"
            >
              Strona główna
            </Link>
          </div>
        </div>
        <div className="relative lg:mt-0 mt-10 aspect-video lg:h-[60vh]">
          <Image
            src="/assets/not-found/not-found.png"
            alt="Page not found"
            fill
            priority
            className="object-contain translate-x-0 lg:-translate-x-40"
          />
        </div>
      </section>
    </main>
  );
};

export default NotFound;
