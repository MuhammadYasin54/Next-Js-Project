
import Link from "next/link";
import React from "react";
import Profile from "@/app/contact/profile/page";
import ContactScreen from "@/app/contact/page";
import AboutScreen from "@/app/about/page";
import Home from "@/app/page";
import Users from "@/app/user/page";
import Login from "@/app/login/page";
import SignUp from "@/app/signup/page";

const NavBar = () =>{
    return (
        <div>
            <ul>
                <li>
                    <Link href={"/"}> Home </Link>
                </li>
                  <li>
                    <Link href={"/contact"}> Contact </Link>
                </li>
                  <li>
                    <Link href={"/about"}> About </Link>
                </li>
                  <li>
                    <Link href={"/contact/profile"}> Profile </Link>
                </li>
                 <li>
                    <Link href={"/user"}> Users </Link>
                </li>
                <li>
                    <Link href={"/login"}> Login </Link>
                </li>
                <li>
                    <Link href={"/signup"}> SignUp </Link>
                </li>
                  
            </ul>
        </div>
    )
}
export default NavBar;