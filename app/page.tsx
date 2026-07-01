"use client"
import React, { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/app/utils/firebase"


const Home = () => {

  useEffect(() => {
    const fetchActiveUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("Auth User: ", user)
        }
        else {
          console.log("no User is Found!")
        }
      })
    }
    fetchActiveUser();
  }, [])

  const handleGreet = () => {
    console.log("Next JS")
  }
  return (
    <div>
      <h1>Welcome To Next JS</h1>
      <button onClick={handleGreet}>Click Me</button>
    </div>
  )
}
export default Home;