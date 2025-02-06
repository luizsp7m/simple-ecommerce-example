"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    setIsOpenProfile((prev) => !prev);
  };

  return (
    <div className="flex gap-4 items-center xl:gap-6 relative">
      {/* Profile Icon */}
      <div className="relative">
        <Image
          src="/profile.png"
          alt="profile"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={handleProfile}
        />
        {isOpenProfile && (
          <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
            <Link href="/profile" className="block text-gray-700 hover:underline">
              Profile
            </Link>
            <div
              className="mt-2 cursor-pointer text-red-500 hover:underline"
              onClick={() => router.push("/logout")}
            >
              Logout
            </div>
          </div>
        )}
      </div>

      {/* Notification Icon */}
      <Image src="/notification.png" alt="notification" width={22} height={22} className="cursor-pointer" />

      {/* Cart Icon */}
      <div className="relative cursor-pointer" onClick={() => setIsOpenCart((prev) => !prev)}>
        <Image src="/cart.png" alt="cart" width={24} height={24} />
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex justify-center items-center">
          2
        </div>
      </div>

      {/* Cart Modal */}
      {isOpenCart && (
        <CartModal /> 
      )}
    </div>
  );
};

export default NavIcons;
