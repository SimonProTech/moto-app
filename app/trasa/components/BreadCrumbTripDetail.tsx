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
import { ChevronLeft } from "lucide-react";
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
            <ChevronLeft size={22} />
          </BreadcrumbSeparator>
        </Button>
        <BreadcrumbItem className="hover:underline">
          <BreadcrumbLink asChild>
            <Link href={`/trasy`}>Wszystkie trasy</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronLeft />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="hover:underline">
          <BreadcrumbLink asChild>
            <Link
              href={`/trasy?region=${region.region_name.toString().toLowerCase()}`}
            >
              {region.region_name.toString()}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{tripName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
