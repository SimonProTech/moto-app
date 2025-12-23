import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ isPathValid }: { isPathValid: boolean }) => {
  return (
    <Link
      href="/"
      className={`flex ${isPathValid ? "text-my-white" : "text-black"}  underline transition-all tracking-tight -space-x-2 items-center h-10`}
    >
      <Image
        src="/assets/header/logo.png"
        alt="logo strony motocrew.pl"
        width={90}
        height={90}
        priority
      />
      <span>MotoCrew</span>
    </Link>
  );
};

export default Logo;
