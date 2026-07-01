"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Users = () =>{
      const router = useRouter();
    const [usersData, setUsersData] = useState ([])
  

    const handleViewUser = (user: any)=>{
        
        router.push(`/user/${user.id}`)
    };

    const fetchUsers = async () =>{
        const apiUrl = "https://jsonplaceholder.typicode.com/users"
        const res = await fetch(apiUrl)
        const actualres = await res?.json()
        actualres && setUsersData(actualres)
    }
    useEffect (()=>{
        fetchUsers();
    },[])
    return (
        <div>
            <h1>Users List Screen!</h1>

            <ul>
                {
                    usersData.map((item: any)=>{
                            return (
                                <li key={item.id}>
                                    {item.name}
                                <button onClick={()=>handleViewUser(item)}>View Data</button>
                                </li>

                            )
                    })
                }
            </ul>
        </div>
    )
}
export default Users;