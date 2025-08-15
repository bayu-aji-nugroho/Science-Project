'use client';

import TypingAnimation from "@/animation/typingAnimation";
import { Usecontext } from "@/auth/authContext";
import AuthModal from "@/auth/authModal"
import { LogIn, LogOutIcon } from "lucide-react";
import { useEffect, useState } from "react"



export default function Heading (){
  const {user,logout, admin} = Usecontext()
  const [IsModalOpen, setIsModalOpen] = useState(false)

  useEffect(()=>(
    setIsModalOpen(false)
  )
    ,[user]

)
    return (

    <header className="text-white md:flex ">
      <div className=" px-4  md:text-left   shadow-2xl shadow-green-700 md:rounded-br-full p-5 md:basis-3/4">
        <div className="text-3xl text-center sm:text-5xl lg:text-5xl font-extrabold text-green-500 mb-2 md:mb-3 ">
          <TypingAnimation text={"neuro"}></TypingAnimation>
          <div>
        </div>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 py-3 md:px-0 font-bold">
          Eksplorasi dunia sains yang inovatif dan menarik secara gratis!
        </p>
      </div>
      <div className=" mt-16 flex items-center justify-center md:basis-1/4">
        <div className="  ">
          {
            user? (
              <div className="flex text-white">
                <p className="mr-2">halo</p>
                <button onClick={logout}><LogOutIcon/></button>
              </div>
            ):(
               <button onClick={()=>setIsModalOpen(true)} className="m-3 bg-green-700 hover:bg-transparent hover:ring-1 hover:ring-green-700 text-white font-bold
                py-3 px-9
                rounded-full 
                hover:shadow-green-600 hover:shadow-md
                transition-all duration-300 ease-in-out">
                <div className="flex">
                  <p className="mr-2">Login</p>
                  <LogIn/>
                </div>
              </button>
            )
          }
         
        </div>
      </div>
      <AuthModal isOpen={IsModalOpen} onClose={()=> setIsModalOpen(false)} />
      
    </header>
    )
}


