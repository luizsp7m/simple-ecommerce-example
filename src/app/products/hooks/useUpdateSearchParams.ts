import { useRouter, useSearchParams } from "next/navigation";

interface UpdateSearchParamsProps {
  key: "category" | "sortBy" | "page";
  value: string;
}

export function useUpdateSearchParams() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function updateSearchParams({ key, value }: UpdateSearchParamsProps) {
    const params = new URLSearchParams(
      searchParams ? Array.from(searchParams.entries()) : []
    );

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  }

  return { updateSearchParams };
}
