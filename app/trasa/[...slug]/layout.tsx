import React from "react";
import Wrapper from "@/app/components/Wrapper";
import Header from "@/app/components/header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <section className="pt-32">{children}</section>
    </Wrapper>
  );
};

export default Layout;
