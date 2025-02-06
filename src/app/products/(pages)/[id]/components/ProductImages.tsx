"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const extraImages = [
  "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  "https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
];

interface ProductImagesProps {
  productImage: string;
}

const ProductImages = ({ productImage }: ProductImagesProps) => {
  const [index, setIndex] = useState(0);

  const productImages = useMemo(() => {
    return [productImage, ...extraImages];
  }, [productImage]);

  return (
    <div className="space-y-8">
      <div className="h-[500px] relative">
        <Image
          src={productImages[index]}
          alt="Main product image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex justify-between gap-4 mt-8">
        {productImages.map((image, index) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={index}
            onClick={() => setIndex(index)}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
