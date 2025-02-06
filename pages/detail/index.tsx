import ProductImage from "@/app/components/ProductImage";
import Customize from "@/app/components/Customize";
import Add from "@/app/components/Add";

const Detail = () => {
  const additionalInfo = [
    { title: "Title 1", content: "Detailed information about Title 1..." },
    { title: "Title 2", content: "More details about Title 2..." },
    { title: "Title 3", content: "Some insights on Title 3..." },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <h1 className="text-3xl font-medium">Product Name</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aspernatur quam ab dolore harum deleniti ipsa autem magnam corrupti.
        </p>
        <div className="h-[2px] bg-gray-200" />

        {/* Pricing */}
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h3 className="font-medium text-2xl">$49</h3>
        </div>
        <div className="h-[2px] bg-gray-200" />

        {/* Customization and Add to Cart */}
        <Customize />
        <Add />
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
};

export default Detail;
