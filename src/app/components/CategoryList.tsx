import SectionContainer from "./SectionContainer";

import { FAKE_API_BASE_URL } from "../constants/AppConfig";

async function getCategories(): Promise<string[]> {
  const response = await fetch(`${FAKE_API_BASE_URL}/products/categories`);
  const data = await response.json();
  return data;
}

const CategoryList = async () => {
  const categories = await getCategories();

  console.log(categories);

  return (
    <SectionContainer>
      <h1 className="text-2xl font-semibold tracking-wide">Categories</h1>
    </SectionContainer>
  );
};

export default CategoryList;
