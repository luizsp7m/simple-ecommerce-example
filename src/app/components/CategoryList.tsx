import Image from 'next/image'
import Link from 'next/link'

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test" className='className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"'>
          <div className="relative bg-slate-100 w-60 h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/12102576/pexels-photo-12102576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt="Food category" 
              fill 
              sizes="20vw" 
              className="object-cover" 
            />
          </div>
                   <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className='className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"'>
          <div className="relative bg-slate-100 w-60 h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/12102576/pexels-photo-12102576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt="Food category" 
              fill 
              sizes="20vw" 
              className="object-cover" 
            />
          </div>
                   <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className='className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"'>
          <div className="relative bg-slate-100 w-60 h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/12102576/pexels-photo-12102576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt="Food category" 
              fill 
              sizes="20vw" 
              className="object-cover" 
            />
          </div>
                   <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className='className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"'>
          <div className="relative bg-slate-100 w-60 h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/12102576/pexels-photo-12102576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt="Food category" 
              fill 
              sizes="20vw" 
              className="object-cover" 
            />
          </div>
                   <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className='className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"'>
          <div className="relative bg-slate-100 w-60 h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/12102576/pexels-photo-12102576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt="Food category" 
              fill 
              sizes="20vw" 
              className="object-cover" 
            />
          </div>
                   <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className='className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"'>
          <div className="relative bg-slate-100 w-60 h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/12102576/pexels-photo-12102576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt="Food category" 
              fill 
              sizes="20vw" 
              className="object-cover" 
            />
          </div>
                   <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className='className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"'>
          <div className="relative bg-slate-100 w-60 h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/12102576/pexels-photo-12102576.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              alt="Food category" 
              fill 
              sizes="20vw" 
              className="object-cover" 
            />
          </div>
                   <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
