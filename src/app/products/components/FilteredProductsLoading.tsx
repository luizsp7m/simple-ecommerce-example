import Heading from "../../../components/shared-components/Heading";
import SectionContainer from "../../../components/shared-components/SectionContainer";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function FilteredProductsLoading() {
  return (
    <SectionContainer className="flex flex-col gap-4">
      <Heading title="Featured Products" />

      <div
        className="gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
