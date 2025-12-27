import { useState } from "react";

interface useSelectableListProps {
  current: string[];
  applyFn: (value: string[]) => void;
}
export const useSelectableList = ({
  current,
  applyFn,
}: useSelectableListProps) => {
  const [selected, setSelected] = useState<string[]>(current);

  const toggle = (value: string) => {
    if (current.includes(value)) return;
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleApply = () => {
    applyFn(selected);
  };

  const reset = () => {
    setSelected([]);
  };

  return {
    selected,
    toggle,
    handleApply,
    setSelected,
    reset,
  };
};
