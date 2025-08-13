'use client'

import { Usecontext } from '@/auth/authContext';
import { Lightbulb, CheckCircle,  Book, BookMarked, Sigma, Pyramid, Scale, AlignStartVerticalIcon } from 'lucide-react';
import { BlockMath } from 'react-katex';
import Io from '../developer/io';
import ExamLine from '../exam/examLine';
import Footer from '../main/footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';



export default function SubSubjectPage({leason}) {
  const {admin} = Usecontext()
  const [activeId,setActiveId] = useState(null)


  return (
    <div className=" text-white min-h-screen font-main">
     
      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16 md:mb-24">
           {admin && (<div>ADMIN</div>)}
            <p className="text-lg text-blue-400 font-bold mb-2">{leason.category}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-green-400 to-teal-300 text-transparent bg-clip-text">
            {leason.judul}
          </h1>
        </header>
        <div className=" md:flex ">
          <article className="md:basis-3/5 md:m-5 prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-headings:text-teal-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white">
            

            {
                leason.data.map((data,i)=>{
                    return (
                        <motion.section key={i} id={`${data.id}`} className='font-sub-main'
                         onViewportEnter={ () =>{
                          if(activeId !== data.id){setActiveId(data.id)}}} viewport={{amount:0.8}}>
                            <h1 className={` ${data.judul == null? "hidden":""} font-extrabold text-lg my-4`}><BookMarked className={'inline mr-3'}/>{data.judul}</h1>
                            <h3 className={` ${data.subjudul == null? "hidden":""} font-bold my-3`}><Book className='inline mr-3'/>{data.subjudul}</h3>
                            <p className={`${data.ket == null?"hidden":""}`}>
                                {data.ket}
                            </p>
                            <div className={`${data.equation == null? "hidden":""} text-xs md:text-sm bg-transparent transform duration-500 leading-relaxed my-8 p-3 rounded-xl   hover:bg-gray-800/50 backdrop-blur-sm shadow-lg`}>
                                <Sigma className='' />
                                <BlockMath math={`${data.equation}`}/>
                            </div>
                            <div className={`${(data.defequ == null && data.defp == null)? "hidden":""} bg-gray-800/50 backdrop-blur-sm shadow-lg p-3 my-5 rounded-2xl border border-teal-300/30 `}>
                            <div className='flex items-center '>
                               <Pyramid className='m-1 mr-2' />
                                <h1 className='font-extrabold'>Definisi</h1>
                            </div>
                             
                              <div className=''>
                                <p className='p-2'>{`${data.defp}`}</p>
                                <BlockMath math={`${data.defequ}`} />
                              </div>
                            </div>
                              {data.exam == true && ( <div className='my-3'>
                                <h1 className='m-2 p-1 font-bold'>Latihan Soal</h1>
                                <ExamLine />
                                </div>
                                )}
                            
                        </motion.section>
                        
                    )
                }
            )
            }



          {admin && (<Io collectionName={"matematika"} idDokumen={"eksponensial-dan-logaritma"} />)}
          </article>

          {/* --- SIDEBAR / TABLE OF CONTENTS --- */}
          <div className='md:basis-2/5'>
          <div className=' md:sticky md:top-5'>
             <div className="my-8 p-6 rounded-xl border border-teal-300/30 bg-gray-800/50 backdrop-blur-sm shadow-lg">
                <h3 className="flex items-center text-xl font-bold text-teal-300 mt-0 mb-3">
                  <Lightbulb className="w-6 h-6 mr-3 text-yellow-300" />
                  Poin Kunci
                </h3>

                {
                    leason.pointKunci.map((data, i)=>(
                        <div key={i}>
                            <div className="flex text-sm">
                                <CheckCircle className="w-5 h-5 mr-3 mt-1 text-teal-400 flex-shrink-0" />
                                <span>{data}.</span>
                            </div>
                        </div>
                    ))
                }
                
              </div>
          
          <aside className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 p-6 rounded-xl bg-gray-800/50 border border-white/20 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-4 text-teal-300 flex "> <AlignStartVerticalIcon className='mr-3'/> Dalam Materi Ini</h3>
              <ul className="space-y-3">
                {leason.section.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className={`${section.id == activeId?"text-white border-teal-300 scale-110 my-2 transform duration-500 ":"text-gray-300 "}  transition-colors block border-l-2 border-gray-600 pl-4`}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="text-xs lg:text-sm my-8 p-6 rounded-xl border border-teal-300/30 bg-gray-800/50 backdrop-blur-sm shadow-lg">
                <h3 className="flex items-center text-xl font-bold text-teal-300 mt-0 mb-3">
                  <Scale className="w-6 h-6 mr-3 text-sky-300" />
                  Sumber dan Lisensi
                </h3>
                <div className='m-3'>
                  <p>
                      Materi di halaman ini diadaptasi dari buku Aljabar dan Trigonometri 2e oleh OpenStax.
                  </p>
                  <p>Dilisensikan di bawah CC BY 4.0.</p>
                </div>
                
                
              </div>
          </div>

          </div>
         
        </div>
      </main>
      <Footer bg={"bg-lime-700"} />
    </div>
  );
}