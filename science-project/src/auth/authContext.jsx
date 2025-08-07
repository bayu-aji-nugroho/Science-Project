"use client"

import { auth } from "@/lib/firebase/init"
import { onAuthStateChanged, signOut } from "firebase/auth"
import {  createContext, useContext, useEffect, useState } from "react"


export const AuthContext = createContext({})
export const Usecontext = () => useContext(AuthContext)

const logout = () =>{
    signOut(auth)
}

export default function AuthContextProvider({children}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

   useEffect(
    ()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=> {
            if(user){
                setUser({
                    uid: user.uid,
                    email:user.email,
                }) 
            } else {
                setUser(null)
            }
            setLoading(false)
        }
    )
    return () => unsubscribe ()
    },[]

   )

   return(
    <AuthContext.Provider value={{user, loading, logout}}>
        {children}
    </AuthContext.Provider>
   )
}