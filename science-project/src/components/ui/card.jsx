"use client"
import { motion } from "framer-motion";

export default function Card({data,theme,imageSize}){
    return (
      <div className={`mt-10 mx-2 ${data.length == 1?"flex":"grid grid-cols-2 md:grid-cols-4 bg-transparent"}`}>
       {
        data.map((data,i)=>(
             data.judul !== undefined && (
                <motion.a 
                  whileTap={{scale: 0.80}} href={`${data.link}`} key={i} className={` text-white p-4 rounded-2xl m-2 bg-gradient-to-br ${theme} hover:bg-` }>
                    <div className=" text-5xl ">
                      <img className={`aspect-square ${imageSize} ${data.icon == null? "hidden":""}`} src= {`${data.icon}` } />
                    </div>
              
                    <h1 className="lg:text-md text-sm font-bold">
                      {data.judul}
                    </h1>
                  
                    <p className="lg:text-sm text-gray-300 text-xs ">
                      {data.paragraft}
                    </p>
                    { 
                      data.prasyarat == undefined?  (
                        <div></div>
                      ):data.prasyarat.map((dataP, i)=>(
                          <div key={i} className="flex"> {dataP}</div>
                      ))
                    }
                  </motion.a>
              )
            
          
        ))
       }
      </div>
        
    
    )
}