"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortByInput() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onChangeSortBy = (value: string) => {
    const params = new URLSearchParams(
      searchParams ? Array.from(searchParams.entries()) : []
    );

    if (value) {
      params.set("sortBy", value);
    } else {
      params.delete("sortBy");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <select
      onChange={(e) => onChangeSortBy(e.target.value)}
      className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
    >
      <option value="">SORT BY</option>
      <option value="asc">PRODUCT ASC</option>
      <option value="desc">PRODUCT DESC</option>
    </select>
  );
}
