"use client"
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dataBase } from "../utils/firebase";



const ContactScreen = () =>{

    const [ users, setUsers] = useState([])

    const fetchUsersfromDb = async () =>{
        const getUsers= await getDocs (collection(dataBase, "Users"))
        console.log("DataBase Users:", getUsers)

        let targetData:any = []

        getUsers.forEach((eachUser)=>{
            console.log(eachUser.id, "--", eachUser.data)

            const obj = {
                ...eachUser.data();
                docId: eachUser.id
            };
            targetData.push(obj)
        })
        targetData && setUsers(targetData);
    }
    useEffect(()=>{
        fetchUsersfromDb()
    },[])
    return (
        <div>
            <h1>Welcome to Contact Screen!</h1>
            <h3>Users Email</h3>
            <ul>
                {
                    users.map((item:any)=>{
                        return <li key={item.uid}>Emails:{item.email}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default ContactScreen;