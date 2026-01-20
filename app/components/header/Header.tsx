"use client";

import { Menu, User, XIcon } from "lucide-react";
import Logo from "@/app/components/header/Logo";
import HeaderLinks from "@/app/components/header/HeaderLinks";
import { usePathname } from "next/navigation";
import { SearchTripsButton } from "@/app/components/common/SearchTripsButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMobileMenu } from "@/app/store/openModal";

const Header = () => {
  const pathName = usePathname();
  const paths = ["/", "/trasy"];
  const isPathValid = paths.includes(pathName);
  const { toggleModal, isModalOpen } = useMobileMenu();

  return (
    <nav
      className={`fixed rounded-full border-gray-600 border-[1px] bg-white w-[90%] md:w-[85%] xl:w-[65%] top-3 left-1/2 -translate-x-1/2 z-[9999999999]`}
    >
      <div
        className={`py-3 mx-auto max-w-[1150px] pl-5 pr-5 text-my-white flex justify-between items-center`}
      >
        <div className="flex items-center relative h-12">
          <Logo location="header" />
        </div>
        <HeaderLinks pathName={pathName} isPathValid={isPathValid} />
        <div className="flex items-center gap-5">
          <SearchTripsButton type="header" />
          <Button
            className={cn(
              `cursor-pointer [&_svg:not([class*='size-'])]:size-5 shrink-0 h-full transition-all hover:bg-gray-200 bg-gray-100`,
            )}
            variant="fake-btn"
          >
            <User className={cn(`text-foreground`)} />
          </Button>
          <Button
            variant="fake-btn"
            onClick={toggleModal}
            className={cn(
              `lg:hidden [&_svg:not([class*='size-'])]:size-6 text-foreground  cursor-pointer`,
            )}
          >
            <XIcon
              size={30}
              className={`absolute transition-all duration-500 ${isModalOpen ? "opacity-100 rotate-0 pointer-events-auto rot" : "opacity-0 rotate-90 pointer-events-none"} `}
            />
            <Menu
              size={30}
              className={`cursor-pointer transition-all duration-700 ${isModalOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} `}
            />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
