"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

interface AllRoutesPaginationProps {
  count: number;
  pageSize: number;
}

const AllRoutesPagination = ({ pageSize, count }: AllRoutesPaginationProps) => {
  const totalPages = Math.ceil(count / pageSize);
  const params = useSearchParams();
  const router = useRouter();
  const [currentPage, setPage] = useState(params.get("page") || 1);

  const changePage = (newPage: number | string) => {
    if (newPage === "...") return;
    setPage(newPage);
    const newParams = new URLSearchParams(params.toString());
    if (newPage) {
      newParams.set("page", newPage.toString());
      return router.push(`?${newParams.toString()}`);
    }
  };

  const smartPagination = () => {
    const pages: (number | string)[] = [];
    pages.push(1);

    if (+currentPage > 4) pages.push("...");

    for (let p = +currentPage - 1; p <= +currentPage + 1; p++) {
      if (p > 1 && p < totalPages) pages.push(p);
    }

    if (+currentPage < totalPages - 3) pages.push("...");

    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  return (
    <div className="mt-10">
      <Pagination>
        <PaginationContent>
          {smartPagination().map((p, i) => {
            const page = i + 1;
            console.log(i);
            return (
              <PaginationItem key={i}>
                {p === "ellipsis" ? (
                  <PaginationEllipsis className="select-none" />
                ) : (
                  <PaginationButton
                    variant="fake-btn"
                    onClick={() => changePage(page)}
                    isActive={page === currentPage}
                  >
                    {p}
                  </PaginationButton>
                )}
              </PaginationItem>
            );
          })}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AllRoutesPagination;
