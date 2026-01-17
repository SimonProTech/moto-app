import React from "react";
import Link from "next/link";

const HeaderLinks = ({
  isPathValid,
  pathName,
}: {
  isPathValid: boolean;
  pathName: string;
}) => {
  return (
    <div
      className={`lg:flex hidden ${isPathValid ? "text-my-white" : "text-black"} px-10 inset-shadow-sm bg-gray-50 gap-1 rounded-full font-light tracking-normal items-center`}
    >
      <Link
        href="/"
        className={`relative py-3 px-4 ${pathName === "/" ? "" : "hover:bg-indigo-500 hover:text-my-white hover:rounded-full"} text-foreground transition-all overflow-hidden`}
      >
        <span className="block transition-transform duration-500">Start</span>
      </Link>
      <Link
        href="/trasy"
        className={`relative py-3 px-4 ${pathName === "/trasy" ? "bg-indigo-500 text-my-white rounded-full" : "hover:bg-indigo-500 hover:text-my-white hover:rounded-full"} text-foreground transition-all overflow-hidden`}
      >
        <span className="block transition-transform duration-500">Trasy</span>
      </Link>
      <Link
        href="/kontakt"
        className={`relative py-3 ${pathName === "/kontakt" ? "bg-indigo-500 text-my-white rounded-full" : "hover:bg-indigo-500 hover:text-my-white hover:rounded-full"} transition-all px-4 text-foreground overflow-hidden`}
      >
        <span className="block transition-transform duration-500">Kontakt</span>
      </Link>
      <Link
        href="/o-mnie"
        className={`relative py-3 px-4 ${pathName === "/o-mnie" ? "bg-indigo-500 text-my-white rounded-full" : "hover:bg-indigo-500 hover:text-my-white hover:rounded-full"} hover:bg-black hover:text-my-white hover:rounded-full transition-all  text-foreground overflow-hidden`}
      >
        <span className="block transition-transform duration-500">O mnie</span>
      </Link>
    </div>
  );
};

export default HeaderLinks;
