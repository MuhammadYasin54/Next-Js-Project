"use client"
import Link from "next/link";
import React, { use } from "react";
import Profile from "@/app/contact/profile/page";
import ContactScreen from "@/app/contact/page";
import AboutScreen from "@/app/about/page";
import Home from "@/app/page";
import Users from "@/app/user/page";
import "@/app/globals.css"
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { getIdToken, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/app/utils/firebase";

const NavBar = () =>{
  const router = useRouter()
  const Logout =  (()=>{
    
              
               signOut(auth);
                deleteCookie("token")
                router.push("/login")
              

   })
  
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

             <Link href="/new-user">
              New User
            </Link>
             <Link href="/server-user">
              Server User
            </Link>
              <Link href="/animated-text">
              Animation
            </Link>
          </div>

          {/* Buttons */}

          <div className="hidden md:flex gap-3">

            <button 
            onClick={Logout}
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
              <Link href={"/login"} > Logout </Link>
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

 