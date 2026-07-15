"use client"

import "../globals.css"


import React, { useEffect, useRef, useState } from "react"

const AnimationScreen = () =>{
    const [count, setCount] = useState(0)
    const [animatedText, setAnimatedText] = useState(['S','t','u','n','n','i','n','g'])

useEffect(()=>{
    setTimeout(() => {
        setCount(count + 1)
        if(count == animatedText.length -1) 
            setCount(0)
    }, 300);
},[count])

return (
    
    <div className={'container'}>
     
        {
            animatedText.map ((item, index)=>{
                return (
                    <span key={index}
                    className={'text'}
                    style={{color: (count == index) ? ('white') : ('')}}>
                        {item}
                    </span>
                )
            })
        }
        
    </div>
)

}
export default AnimationScreen;