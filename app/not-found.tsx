import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
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

        <Link
          href="/"
          className="mt-6 inline-block rounded-full hover:duration-500 hover:bg-card bg-ring px-4 py-3 text-background transition-all"
        >
          Wróć do strony głównej
        </Link>
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
