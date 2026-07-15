import NavBar from "@/components/navbar/page";
import React from "react";

const ServerUser =async () => {
    
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    const res = await fetch(apiUrl);
    const actualData = await res.json();
    console.log("Users:" ,actualData)   
    return (
        <div>
            <h1>Actual Use of Server Components</h1>
            <NavBar/>
            <ul>
                {
                    actualData.map((item:any)=>{
                        return(
                            <li key={item?.id}>
                                {item?.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ServerUser;