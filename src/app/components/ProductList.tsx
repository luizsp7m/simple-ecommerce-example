import Link from "next/link"
import Image from "next/image"

type Product = {
  id: number,
  name: string,
  title: string,
  image: string,
  description: string,
  price: number
}

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products?limit=8");

  const data = await response.json();

  return data as Product[];
}

export default async function ProductList() {

  const products = await getProducts();


  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
     
     {
      products.map(product => (

        <Link key={product.id} href={`/products/${product.id}`} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-96">
          <Image 
            src={product.image} 
            alt="Product 1"
            layout="fill"
            objectFit="cover"
            sizes="25vw" 
            className="absolute rounded-lg shadow-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image 
            src={product.image} 
            alt="Product 1"
            layout="fill"
            objectFit="cover"
            sizes="25vw" 
            className="absolute rounded-lg shadow-md"
          />
        </div>
        <div className="flex justify-between">
        <span className="font-medium">{product.name}</span>
        <span className="text-sm text-gray-600">{product.price}</span>
        </div>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">Quantity: 1</span>
          <button
           className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </div>
</Link>

      ))
     }

    </div>
  )
}
