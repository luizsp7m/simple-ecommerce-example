import { FAKE_API_BASE_URL } from "../../../../constants/AppConfig";
import { Product } from "../../../../types/Product";
import { currencyFormatter } from "../../../../utils/currencyFormatter";
import Add from "./components/Add";
import Customize from "./components/Customize";
import ProductImages from "./components/ProductImages";

async function getProductById(productId: string): Promise<Product> {
  const response = await fetch(`${FAKE_API_BASE_URL}/products/${productId}`);
  const data = await response.json();

  return data;
}

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const productId = params.id;

  const product = await getProductById(productId);

  const additionalInfo = [
    { title: "Title 1", content: "Detailed information about Title 1..." },
    { title: "Title 2", content: "More details about Title 2..." },
    { title: "Title 3", content: "Some insights on Title 3..." },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 top-20 h-max">
        <ProductImages productImage={product.image} />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <h1 className="text-3xl font-medium">{product.title}</h1>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="h-[2px] bg-gray-200" />

        {/* Pricing */}
        <div className="flex items-center gap-4">
          <h3 className="font-medium text-2xl">
            {currencyFormatter(product.price)}
          </h3>
        </div>
        <div className="h-[2px] bg-gray-200" />

        {/* Customization and Add to Cart */}
        <Customize />
        <Add product={product} />
        <div className="h-[2px] bg-gray-200" />

        {/* Additional Information - Expandable */}
        {additionalInfo.map((item, index) => (
          <div key={index} className="text-sm border-b pb-4">
            <button className="w-full text-left text-lg font-medium flex justify-between items-center">
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
