import React, { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1150px] relative pl-5 pr-5 mx-auto min-h-full">
      {children}
    </div>
  );
};

export default Wrapper;
