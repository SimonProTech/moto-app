import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const AllRoutesSkeletons = () => {
  return (
    <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from([1, 2, 3]).map((_, index) => {
        return <Skeleton key={index} className="h-[320px] w-full rounded-xl" />;
      })}
    </div>
  );
};

export default AllRoutesSkeletons;
