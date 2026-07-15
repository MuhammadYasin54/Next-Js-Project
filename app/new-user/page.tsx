"use client"
import React, { useEffect } from "react"
import { fetchAllNewUsers } from "../action"
import Users from "../user/page"
import NavBar from "@/components/navbar/page"


const NewUser = () =>{
   
        const fetchData = async () =>{
            const users = await fetchAllNewUsers();
            console.log("Users:", users)
        }

        useEffect (()=>{
            fetchData()
        },[])
    return (
        <div>
            <NavBar/>
            <h1>
                New User Screen
            </h1>
           
            
         
        </div>
    )
}
export default NewUser;