"use client"

import React, { useState } from "react";
import {auth} from "@/app/utils/firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import {setCookie} from "cookies-next"
import Link from "next/link";



const Login = () =>{

    const [formState, SetFormStates] = useState({
        email:"",
        password: "",
    })

    const submit = async () =>{
     
          
        const res = await signInWithEmailAndPassword(
            auth,
            formState.email,
            formState.password,
        )
      
        // console.log("Login Success", res)
        SetFormStates({
            email:"",
            password: ""
        })
              

         const tokenVal = await res.user.getIdToken();
         console.log("Token:", tokenVal);

         setCookie("token" , tokenVal, {maxAge: 60 * 60 * 3})
         window.location.reload();    
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to continue
        </p>

        <div

        
        className="mt-8 space-y-5">

          <div>
            <label className="block mb-2 text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={formState.email}
            onChange={(e)=> SetFormStates({...formState, email: e.target.value})}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={formState.password}
            onChange={(e)=> SetFormStates({...formState, password: e.target.value})}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button onClick={submit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </div>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>

    )
}

export default Login;



