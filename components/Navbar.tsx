"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white shadow-md max-sm:px-2">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      <div className="flex gap-4 text-base font-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-blue-500 ${
            pathname === "/" && "text-blue-500"
          }`}
        >
          Home
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`hover:text-blue-500 ${
            pathname === "/wishlist" && "text-blue-500"
          }`}
        >
          Wishlist
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-blue-500 ${
            pathname === "/orders" && "text-blue-500"
          }`}
        >
          Orders
        </Link>
      </div>

      <div className="flex gap-3 border border-gray-300 px-3 py-1 items-center rounded-lg shadow-sm">
        <input
          className="outline-none max-sm:max-w-[120px] w-full px-2 py-1"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
          className={`p-1 ${query === "" ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          <Search className="h-5 w-5 text-gray-500 hover:text-blue-500" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link href="/cart" className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white transition max-md:hidden">
          <ShoppingCart />
          <p className="text-base font-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white shadow-lg text-base font-bold lg:hidden transition duration-300 ease-in-out">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link href={user ? "/wishlist" : "/sign-in"} className="hover:text-blue-500">
              Wishlist
            </Link>
            <Link href={user ? "/orders" : "/sign-in"} className="hover:text-blue-500">
              Orders
            </Link>
            <Link href="/cart" className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white transition">
              <ShoppingCart />
              <p className="text-base font-bold">Cart ({cart.cartItems.length})</p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound className="h-6 w-6 text-gray-500 hover:text-blue-500 transition" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
