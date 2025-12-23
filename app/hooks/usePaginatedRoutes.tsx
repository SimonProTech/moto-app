"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchAllRoutes } from "@/helpers/fetchers/fetchRoutes";

export async function usePaginatedRoutes(page: number, pageSize = 10) {
  useQuery({
    queryKey: ["routes", page],
    queryFn: () => fetchAllRoutes(page, pageSize),
    placeholderData: keepPreviousData,
  });
}
