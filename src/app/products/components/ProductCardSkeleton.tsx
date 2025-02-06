export default function ProductCardSkeleton() {
  return (
    <div className="border rounded animate-pulse">
      <div className="relative h-[256px] m-4 bg-gray-200 rounded"></div>

      <div className="p-4 border-t">
        <div className="flex justify-between gap-2 items-center">
          <div className="w-4/5 h-4 bg-gray-200 rounded"></div>
          <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
          <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
