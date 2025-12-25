"use client";
import { useSearchParams } from "next/navigation";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";

interface AllRoutesPaginationProps {
  count: number;
  pageSize: number;
}
const AllRoutesPagination = ({ pageSize, count }: AllRoutesPaginationProps) => {
  const params = useSearchParams();
  const initialPage = Number(params.get("page")) || 1;

  return (
    <div className="mt-10">
      <PaginationWithLinks
        page={initialPage}
        pageSize={pageSize}
        totalCount={count}
        navigationMode="router"
      />
    </div>
  );
};

export default AllRoutesPagination;
