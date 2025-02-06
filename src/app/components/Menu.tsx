"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <Image 
        src="/menu.png"
         alt="menu"  
         width={28} 
         height={28} 
         className="cursor-pointer"
        onClick={() => setOpen((prev)=> !prev)}/>
           


           {
  open && (
    <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col gap-8 items-center justify-center text-xl z-10">
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/details">Details</Link>
      <Link href="/about">About</Link> {/* Corrected "link" to "Link" */}
      <Link href="/logout">LogOut</Link>
      <Link href="/contact">contact</Link>
    </div>
  )
}

        </div>
  )
}

export default Menu