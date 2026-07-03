"use client"
import React from "react";
import {setCookie} from "cookies-next"

const Profile = () =>{
    return (
        <div>
            <h1>Welcome to Profile Screen!</h1>
            <button onClick={()=> setCookie("token", "Yasin123")}> Save Data</button>
        </div>
    )
}
export default Profile;