"use client"

import React, { useState } from "react";
import {auth} from "@/app/utils/firebase"
import {signInWithEmailAndPassword} from "firebase/auth"

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
    }
    return (
        <div>
            <h1>Login Page</h1>
            <input type="email"
            placeholder="Enter Email"
            value={formState.email}
            onChange={(e)=> SetFormStates({...formState, email: e.target.value})} />
             <input type="password"
            placeholder="******"
            value={formState.password}
            onChange={(e)=> SetFormStates({...formState, password: e.target.value})} />
            <button onClick={submit}>Login</button>
        </div>
    )
}
export default Login;