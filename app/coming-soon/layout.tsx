import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen text-white font-sans bg-background flex-row-reverse flex justify-center items-center overflow-hidden relative">
      {children}
    </main>
  );
};

export default Layout;
