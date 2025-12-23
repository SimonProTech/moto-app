import React from "react";
import Link from "next/link";

const HeaderLinks = ({ isPathValid }: { isPathValid: boolean }) => {
  return (
    <div
      className={`lg:flex hidden ${isPathValid ? "text-my-white" : "text-black"}  border border-gray-border px-12 py-3 rounded-full font-light tracking-normal items-center gap-10`}
    >
      <Link href="/trasy" className="relative group overflow-hidden h-6">
        <span className="block transition-transform duration-500 group-hover:-translate-y-6">
          Trasy
        </span>
        <span
          className={`absolute top-6 left-0 ${isPathValid ? "text-ring" : ""}  w-full transition-transform duration-500 group-hover:-translate-y-6`}
        >
          Trasy
        </span>
      </Link>
      <Link href="/kontakt" className="relative group overflow-hidden h-6">
        <span className="block transition-transform duration-500 group-hover:-translate-y-6">
          Kontakt
        </span>
        <span
          className={`absolute top-6 left-0 ${isPathValid ? "text-ring" : ""} w-full transition-transform duration-500 group-hover:-translate-y-6`}
        >
          Kontakt
        </span>
      </Link>
      <Link href="/o-mnie" className="relative group overflow-hidden h-6">
        <span className="block transition-transform duration-500 group-hover:-translate-y-6">
          O mnie
        </span>
        <span
          className={`absolute top-6 left-0 ${isPathValid ? "text-ring" : ""} w-full transition-transform duration-500 group-hover:-translate-y-6`}
        >
          O mnie
        </span>
      </Link>
    </div>
  );
};

export default HeaderLinks;
