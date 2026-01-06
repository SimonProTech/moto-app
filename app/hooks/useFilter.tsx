import { useRouter, useSearchParams } from "next/navigation";

interface UseFilterProps {
  paramName: string;
}

const useFilter = ({ paramName }: UseFilterProps) => {
  const params = useSearchParams();
  const router = useRouter();
  const getCurrentParamUrl = params.get(paramName) ?? "";

  const filterFn = (value: string) => {
    const normalizedValue = value.toLowerCase();
    const newParams = new URLSearchParams(params.toString());

    if (normalizedValue === getCurrentParamUrl) {
      newParams.delete(paramName);
      newParams.delete("page");
      return router.push(`?${newParams.toString()}`, {
        scroll: false,
      });
    }

    if (normalizedValue) {
      newParams.set(paramName, normalizedValue);

      const keys = Array.from(newParams.keys());
      const onlyPage = keys.length === 1 && keys[0] === "page";

      console.log(onlyPage);

      if (!onlyPage) {
        newParams.delete("page");
      }

      return router.push(`?${newParams.toString()}`, {
        scroll: false,
      });
    }
  };

  const clearSelectedFilter = () => {
    const newParams = new URLSearchParams(params.toString());
    newParams.delete(paramName);
    const queryString = newParams.toString();
    return router.push(queryString ? `?${queryString}` : "/trasy", {
      scroll: false,
    });
  };

  const clearAllFilters = () => {
    return router.push("/trasy");
  };

  return {
    paramName,
    filterFn,
    getCurrentParamUrl,
    clearSelectedFilter,
    clearAllFilters,
  };
};

export default useFilter;
