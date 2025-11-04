import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pl">
      <body className="font-sans bg-background text-white">
        <main className="min-h-screen flex-row-reverse flex justify-center items-center overflow-hidden relative">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
