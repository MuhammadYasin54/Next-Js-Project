"use client";

import { useRouter } from "next/navigation"
import React, { useEffect } from "react";

const NotFound = () =>{
    const router = useRouter();

    useEffect (()=>{
        const timer =setTimeout(()=>{
            router.replace("/")
        },3000)

        return () => clearTimeout(timer)
    },[router])
    return (
    <h1>Page not found!</h1>
    )
}
export default NotFound;