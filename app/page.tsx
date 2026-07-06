"use client"
import React, { useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "@/app/utils/firebase"
import { useRouter } from "next/navigation"
import { deleteCookie, getCookie } from "cookies-next"



const Home = () => {
  const router = useRouter()

  useEffect(() => {
    const fetchActiveUser = () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          console.log("Auth User: ", user)
          const authToken = await user.getIdToken();
          const fetchSavedToken = getCookie("token");


          if (authToken != fetchSavedToken) {
            await signOut(auth);
            deleteCookie("token")
            window.location.reload();
          }
          else {
            console.log("Token Is Valid!");
          }
        }
        else {
          console.log("no User is Found!")
          await signOut(auth);
          deleteCookie("token");
          window.location.reload()
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