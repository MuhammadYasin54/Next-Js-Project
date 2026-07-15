"use-client"
import React from "react";
import Image from "next/image";
import AppleImg from "@/public/assets/images/apple.webp"
import NavBar from "@/components/navbar/page"

const AboutScreen = () =>{
    return (
        <div>
            <NavBar/>
            <h1>Welcome to About Screen!</h1>
            <Image 
            alt="Apple"
            height={200}
            width={200}
            src={AppleImg}
            priority= {true}
            />
        </div>
    )
}
export default AboutScreen;