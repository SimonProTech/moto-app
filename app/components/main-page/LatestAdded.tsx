"use client";

import React from "react";
import SingleRoute from "@/app/components/main-page/Route";
import { RouteInterface } from "@/types/app";

interface AllRoutesI {
  data: RouteInterface[];
}

const LatestAdded = ({ data }: AllRoutesI) => {
  return (
    <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data?.map((route) => (
        <SingleRoute key={route.id} {...route} />
      ))}
    </div>
  );
};

export default LatestAdded;
