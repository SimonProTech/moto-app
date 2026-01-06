import { useRouter, useSearchParams } from "next/navigation";

export const useMultiFilter = (paramName: string) => {
  const params = useSearchParams();
  const router = useRouter();

  const current = params.get(paramName)?.split(",") ?? [];

  const applyFn = (values: string[]) => {
    const newParams = new URLSearchParams(params.toString());

    if (values.length === 0) {
      newParams.delete(paramName);
    } else {
      newParams.set(paramName, values.join(","));
    }

    const keys = Array.from(newParams.keys());
    const onlyPage = keys.length === 1 && keys[0] === "page";

    if (!onlyPage) {
      newParams.delete("page");
    }

    router.push(`?${newParams.toString()}`, { scroll: false });
  };

  const clearSelectedFilter = () => {
    const newParams = new URLSearchParams(params.toString());
    newParams.delete(paramName);
    const queryString = newParams.toString();
    return router.push(queryString ? `?${queryString}` : "/trasy", {
      scroll: false,
    });
  };

  return { current, applyFn, clearSelectedFilter };
};
