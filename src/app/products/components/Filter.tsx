import SectionContainer from "../../../components/shared-components/SectionContainer";
import { FAKE_API_BASE_URL } from "../../../constants/AppConfig";
import CategoryInput from "./CategoryInput";
import SortByInput from "./SortByInput";

async function getCategories(): Promise<string[]> {
  const response = await fetch(`${FAKE_API_BASE_URL}/products/categories`);
  const data = await response.json();

  return data;
}

const Filter = async () => {
  const categories = await getCategories();

  return (
    <SectionContainer className="flex items-center gap-2">
      <CategoryInput categories={categories} />
      <SortByInput />
    </SectionContainer>
  );
};

export default Filter;
