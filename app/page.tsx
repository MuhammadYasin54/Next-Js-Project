"use client"
import React, { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/app/utils/firebase"
import { useRouter } from "next/navigation"


const Home = () => {
  const router = useRouter()

  useEffect(() => {
    const fetchActiveUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("Auth User: ", user)
        }
        else {
          console.log("no User is Found!")
        }
        if (!user) {
        router.push("/login");
    }
      })
    }

    fetchActiveUser();
  }, [router])

    

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