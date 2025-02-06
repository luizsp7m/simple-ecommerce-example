"use client";
import { useRouter } from "next/navigation"; 
import Image from "next/image";




const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("Name"); 
    if(name){
    router.push(`/list?name=${name}`);
   
    }
  }
  return (
<form className=" flex justify-between items-center gap-4 bg-gray-100 p-2 rounded-md flex-1" 
onSubmit={handleSearch}>
  <input
   className="flex-1 bg-transparent outline-none"
    type="text"
      name="Name"
    placeholder="Search..."/>

    <button className="cursor-pointer">
<Image src="/search.png" alt="search" width={16} height={16} />
    </button>


</form>
  )
}

export default SearchBar