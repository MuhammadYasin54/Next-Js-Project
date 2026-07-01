"use client"
import { useParams } from "next/navigation"
import React from "react"

const ViewUserScreen = () =>{
    const {uid} = useParams();
    console.log(uid)

    return (
        <div>
            <h1>{`User Id: ${uid}`}</h1>
          

        </div>
    )
}
export default ViewUserScreen;