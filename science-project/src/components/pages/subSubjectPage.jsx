'use client'

import { Usecontext } from '@/auth/authContext';
import { Lightbulb, CheckCircle,  Book, BookMarked, Sigma } from 'lucide-react';
import { BlockMath } from 'react-katex';
import Io from '../developer/io';
import ExamLine from '../exam/examLine';
import Footer from '../main/footer';



export default function SubSubjectPage({lesson}) {
  const {admin} = Usecontext()



  return (
    <div className=" text-white min-h-screen font-main">
     
      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <header className="text-center mb-16 md:mb-24">
           {admin && (<div>ADMIN</div>)}
            <p className="text-lg text-blue-400 font-bold mb-2">{lesson.category}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-green-400 to-teal-300 text-transparent bg-clip-text">
            {lesson.judul}
          </h1>
          
        </header>

        <div className=" md:flex ">
          
          <article className="md:basis-3/5 md:m-5 prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-headings:text-teal-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white">
            

            {
                lesson.data.map((data,i)=>{
                    
                    return (
                        <section key={i} id="introduction" className='font-sub-main'>
                            <h1 className={` ${data.judul == null? "hidden":""} font-extrabold text-lg my-4`}><BookMarked className={'inline mr-3'}/>{data.judul}</h1>
                            <h3 className={` ${data.subjudul == null? "hidden":""} font-bold my-3`}><Book className='inline mr-3'/>{data.subjudul}</h3>
                            <p className={`${data.ket == null?"hidden":""}`}>
                                {data.ket}
                            </p>
                            <div className={`${data.equation == null? "hidden":""} hover:bg-transparent transform duration-500 leading-relaxed my-8 p-3 rounded-xl border border-teal-300/30 bg-gray-800/50 backdrop-blur-sm shadow-lg`}>
                                <Sigma className='' />
                                <BlockMath math={`${data.equation}`}/>
                            </div>
                            
                        </section>
                        
                    )
                }
            )
            }
            <ExamLine />



          {admin && (<Io></Io>)}
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
                    lesson.pointKunci.map((data, i)=>(
                        <div key={i}>
                            <div className="flex">
                                <CheckCircle className="w-5 h-5 mr-3 mt-1 text-teal-400 flex-shrink-0" />
                                <span>{data}.</span>
                            </div>
                        </div>
                    ))
                }
                
              </div>
          
          <aside className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 p-6 rounded-xl bg-gray-800/50 border border-white/20 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-4 text-teal-300">Dalam Materi Ini</h3>
              <ul className="space-y-3">
                {lesson.section.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-gray-300 hover:text-white transition-colors block border-l-2 border-gray-600 hover:border-teal-300 pl-4">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          </div>

          </div>
         
        </div>
      </main>
      <Footer bg={"bg-lime-700"} />
    </div>
  );
}