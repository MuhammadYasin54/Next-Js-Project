"use client"
import React,{ useState } from "react";
import { app, auth, dataBase } from "@/app/utils/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";



const SignUp = () => {
   
    
    const [formState, SetFormStates] = useState({
        userName: "",
        email: "",
        password: "",
    })

    const submit = async () => {

        const saveUser = await createUserWithEmailAndPassword(
            auth,         
            formState.email,
            formState.password,
        )

        const obj = {
            uid: saveUser?.user?.uid,
            userName: formState.userName,
            email: formState.email,
            password: btoa(formState.password)
        }

        // Saving Data in DataBase

        if (saveUser) {
            const saveUser = await addDoc(collection(dataBase, "Users"), obj)
            console.log("User Saved", saveUser)
        }
    
        SetFormStates({
            userName: "",
            email: "",
            password: ""
        })
        alert ("Account Created Successfully, Please click on Login Button")
   
    }

    return (
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-100 px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Create Account 🚀
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join us today
        </p>

        <div className="mt-8 space-y-5"
       >

          <div>
            <label className="block mb-2 text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={formState.userName}
              onChange={(e)=>SetFormStates({...formState,userName:e.target.value})}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={formState.email}
                onChange={(e) => SetFormStates({ ...formState, email: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
               value={formState.password}
                onChange={(e) => SetFormStates({ ...formState, password: e.target.value })}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
             onClick={submit}
          >
            Create Account
          </button>

        </div>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
    )
}
export default SignUp;

