
import Link from "next/link";
import React from "react";
import Profile from "@/app/contact/profile/page";
import ContactScreen from "@/app/contact/page";
import AboutScreen from "@/app/about/page";
import Home from "@/app/page";
import Users from "@/app/user/page";
import Login from "@/app/login/page";
import SignUp from "@/app/signup/page";
import "@/app/globals.css"

const NavBar = () =>{
    return (
        <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyApp
          </Link>

          {/* Menu */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">

            <Link href="/">Home</Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <Link href="/contact/profile">
              Profile
            </Link>

            <Link href="/user">
              User
            </Link>

          </div>

          {/* Buttons */}

          <div className="hidden md:flex gap-3">

            <button className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
              <Link href={"/login"}> Login </Link>
            </button>

            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
             <Link href={"/signup"}> SignUp </Link>
            </button>

          </div>

          {/* Mobile Icon */}

          <button className="md:hidden text-3xl">
            ☰
          </button>

        </div>
      </div>
    </nav>
    )
}
export default NavBar;

 