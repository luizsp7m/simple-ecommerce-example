"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface CategoryInputProps {
  categories: string[];
}

export default function CategoryInput({ categories }: CategoryInputProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onChangeCategory = (value: string) => {
    const params = new URLSearchParams(
      searchParams ? Array.from(searchParams.entries()) : []
    );

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <select
      className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
      onChange={(e) => onChangeCategory(e.target.value)}
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
