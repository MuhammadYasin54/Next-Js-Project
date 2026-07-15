"use client"
import React from "react";
import {setCookie} from "cookies-next"
import NavBar from "@/components/navbar/page"

const Profile = () =>{
    return (
        <div>
            <NavBar/>
            <h1>Welcome to Profile Screen!</h1>
            <button onClick={()=> setCookie("token", "Yasin123")}> Save Data</button>
        </div>
    )
}
export default Profile;