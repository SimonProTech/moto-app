"use client";

import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { ROUTE_REGIONS } from "@/types/app";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BreadCrumbTripDetailProps {
  tripName: string;
  region: ROUTE_REGIONS;
}

export const BreadCrumbTripDetail = ({
  tripName,
  region,
}: BreadCrumbTripDetailProps) => {
  const router = useRouter();
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-black">
        <Button
          variant="fake-btn"
          title="Poprzednia strona"
          onClick={() => router.back()}
          className={cn(
            `hover:bg-ring p-2 w-max [&_svg:not([class*='size-'])]:size-5 cursor-pointer transition-all rounded-full`,
          )}
        >
          <BreadcrumbSeparator className="text-black">
            <ChevronLeft className="md:block hidden" />
            <ArrowLeft className="md:hidden block" />
          </BreadcrumbSeparator>
        </Button>
        <BreadcrumbItem className="hover:underline md:block hidden">
          <BreadcrumbLink asChild>
            <Link href={`/trasy`}>Wszystkie trasy</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="md:block hidden">
          <ChevronLeft />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="hover:underline md:block hidden">
          <BreadcrumbLink asChild>
            <Link
              href={`/trasy?region=${region.region_name.toString().toLowerCase()}`}
            >
              {region.region_name.toString()}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="md:block hidden" />
        <BreadcrumbItem className="md:block hidden">
          <BreadcrumbPage>{tripName}</BreadcrumbPage>
        </BreadcrumbItem>
        <div className="ml-auto md:hidden block px-6 py-1 rounded-full bg-my-white border border-gray-border text-foreground font-medium">
          {region.region_name.toString()}
        </div>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
