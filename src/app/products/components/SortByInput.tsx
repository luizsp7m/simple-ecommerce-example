"use client";

import { useUpdateSearchParams } from "../hooks/useUpdateSearchParams";

interface SortByInputProps {
  selectedSortBy?: string;
}

export default function SortByInput({ selectedSortBy }: SortByInputProps) {
  const { updateSearchParams } = useUpdateSearchParams();

  function handleChangeSortBy(value: string) {
    updateSearchParams({ key: "sortBy", value });
  }

  return (
    <select
      onChange={(e) => handleChangeSortBy(e.target.value)}
      className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
      defaultValue={selectedSortBy ?? ""}
    >
      <option value="">SORT BY</option>
      <option value="asc">PRODUCT ASC</option>
      <option value="desc">PRODUCT DESC</option>
    </select>
  );
}
