import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      className={`flex underline w-[210px] relative h-14 transition-all tracking-tight items-center`}
    >
      <Image
        src="/logo.png"
        objectFit="cover"
        className="select-none"
        alt="logo strony motocrew.pl"
        fill
        priority
      />
    </Link>
  );
};

export default Logo;
