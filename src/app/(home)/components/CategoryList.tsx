import Link from "next/link";
import Heading from "../../../components/shared-components/Heading";
import SectionContainer from "../../../components/shared-components/SectionContainer";

import { FAKE_API_BASE_URL } from "../../../constants/AppConfig";

async function getCategories(): Promise<string[]> {
  const response = await fetch(`${FAKE_API_BASE_URL}/products/categories`);
  const data = await response.json();

  return data;
}

const CategoryList = async () => {
  const categories = await getCategories();

  return (
    <SectionContainer className="flex flex-col gap-4">
      <Heading title="Categories" />

      <div
        className="gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
        }}
      >
        {categories.map((category, index) => (
          <Link key={index} href={`/products?category=${category}`}>
            <div className="uppercase p-8 bg-gray-100 rounded cursor-pointer">
              {category}
            </div>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
};

export default CategoryList;
