"use client";

import { useUpdateSearchParams } from "../hooks/useUpdateSearchParams";

interface CategoryInputProps {
  categories: string[];
  selectedCategory?: string;
}

export default function CategoryInput({
  categories,
  selectedCategory,
}: CategoryInputProps) {
  const { updateSearchParams } = useUpdateSearchParams();

  function handleChangeCategory(value: string) {
    updateSearchParams({ key: "category", value });
  }

  return (
    <select
      className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
      onChange={(e) => handleChangeCategory(e.target.value)}
      defaultValue={selectedCategory ?? ""}
    >
      <option value="">SELECT A CATEGORY</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
