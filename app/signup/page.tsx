"use client"
import React, { useState } from "react";
import { app, auth, dataBase } from "@/app/utils/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {

    const [formState, SetFormStates] = useState({
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
            email: formState.email,
            password: btoa(formState.password)
        }

        // Saving Data in DataBase

        if (saveUser) {
            const saveUser = await addDoc(collection(dataBase, "Users"), obj)
            // console.log("User Saved", saveUser)
        }
    
        SetFormStates({
            email: "",
            password: ""
        })
    }

    return (
        <div>
            <h1>SignUp Page</h1>
            <input type="email" placeholder="Enter Your Email"
                value={formState.email}
                onChange={(e) => SetFormStates({ ...formState, email: e.target.value })}
            />
            <input type="password" placeholder="******"
                value={formState.password}
                onChange={(e) => SetFormStates({ ...formState, password: e.target.value })}
            />
            <button onClick={submit}>Save User</button>
        </div>
    )
}
export default SignUp;