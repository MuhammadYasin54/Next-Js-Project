import React from "react";
import {getCookie} from "cookies-next"

const Services = () =>{
    const token = getCookie("token")
    console.log(token)
    return (
        <div>
            <h1>
                Services Page
            </h1>
        </div>
    )
}

export default Services;