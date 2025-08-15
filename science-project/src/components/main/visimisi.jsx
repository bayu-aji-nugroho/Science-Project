// components/VisionMission.jsx
import TypingAnim from '@/animation/typingAnim';
import React from 'react';

const DonateandPort = ()=> {
  return (
    <div className="flex">
        <div className=" flex p-3 justify-center items-center ">
          <a href="https://www.bermatematika.my.id/" className="flex justify-center items-center">
            <p className="mx-1">portfolioku</p>
             <img src="\icon\code_darkmode.svg"/>
          </a>
        </div>
        
          <a href="\donate" className=" m-3 bg-green-700 hover:bg-transparent hover:ring-1 hover:ring-green-700 text-white font-bold
            py-3 px-9
            rounded-full 
            hover:shadow-green-600 hover:shadow-md
            transition-all duration-300 ease-in-out
            ">
           <p>Donate</p>
          </a>

      </div>
  )
}

const VisiMisi = () => {
  return (
    <div className="flex flex-col md:flex-row mt-16 md:basis-3/4 font-main">
          {/* Kolom Visi */}
          <div className="w-full bg-black/40 md:p-8 p-4 rounded-lg shadow-lg md:rounded-r-full">
            <div className="text-sm md:lg leading-relaxed text-white flex items-center">
              <TypingAnim />
            </div>
          </div>
          <div className="flex text-white justify-center items-center  md:m-5">
            <div className=''>
              <DonateandPort />
            </div>
          </div>
        </div>
  );
};

export default VisiMisi;