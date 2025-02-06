import SectionContainer from "../../../components/shared-components/SectionContainer";
import { FAKE_API_BASE_URL } from "../../../constants/AppConfig";
import CategoryInput from "./CategoryInput";
import SortByInput from "./SortByInput";

async function getCategories(): Promise<string[]> {
  const response = await fetch(`${FAKE_API_BASE_URL}/products/categories`);
  const data = await response.json();

  return data;
}

interface FilterProps {
  selectedCategory?: string;
  selectedSortBy?: string;
}

const Filter = async ({ selectedCategory, selectedSortBy }: FilterProps) => {
  const categories = await getCategories();

  return (
    <SectionContainer className="flex items-center gap-2">
      <CategoryInput
        categories={categories}
        selectedCategory={selectedCategory}
      />

      <SortByInput selectedSortBy={selectedSortBy} />
    </SectionContainer>
  );
};

export default Filter;
