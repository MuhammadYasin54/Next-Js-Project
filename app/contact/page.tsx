"use client"
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dataBase } from "../utils/firebase";

const ContactScreen = () =>{

    const [ users, setUsers] = useState([])

    const updateUser = async (userData: any)=>{
        console.log(userData)

        const docRef = doc(dataBase, "Users", userData.docId)
        await updateDoc(
            docRef, {
                email: "Basit123@gmail.com",
                password: "Basit125",
            }
        )
    }

    const deleteUser = (userData:any) =>{
        console.log(userData)
        deleteDoc(doc(dataBase, "Users", userData.docId))
        .then(()=>{
            console.log("Successfully User Deleted")
        })
        .catch((err)=>{
            console.log("Error while Deleting Data", err)
        })
        .finally(()=>{
            fetchUsersfromDb()
        })
    }

    const fetchUsersfromDb = async () =>{
        const getUsers= await getDocs (collection(dataBase, "Users"))
        console.log("DataBase Users:", getUsers)

        let targetData:any = []

        getUsers.forEach((eachUser)=>{
            console.log(eachUser.id, "--", eachUser.data())

            const obj = {
                ...eachUser.data(),
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
                        return <li key={item.uid}>Name:{item?.email.slice(0, item.email.indexOf("@"))}
                        <button onClick={()=>{deleteUser(item)}}>Delete</button>
                        <button onClick={()=>{updateUser(item)}}> Update </button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default ContactScreen;