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
      return router.push(`?${newParams.toString()}`, {
        scroll: false,
      });
    }

    if (normalizedValue) {
      newParams.set(paramName, normalizedValue);
      return router.push(`?${newParams.toString()}`, {
        scroll: false,
      });
    }
  };

  const clearSelectedFilter = () => {
    const newParams = new URLSearchParams(params.toString());
    newParams.delete(paramName);
    const queryString = newParams.toString();
    return router.push(queryString ? `?${queryString}` : ".", {
      scroll: false,
    });
  };

  const clearAllFilters = () => {
    return router.push("/");
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
