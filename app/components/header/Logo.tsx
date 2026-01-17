import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  location: "header" | "footer";
}

const Logo = ({ height = 20, width = 80, location }: LogoProps) => {
  return (
    <Link
      href="/"
      className={`${location === "header" ? "px-3" : "px-0"} relative`}
    >
      <Image
        src="/logo.png"
        objectFit="contain"
        className="select-none"
        alt="logo strony motocrew.pl"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
};

export default Logo;
