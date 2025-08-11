'use client'

import { useEffect, useRef, useState } from "react";

import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/lib/firebase/init";


function GenerateVariabel(text) {
    const font = [];
    const data = text.split(" ");
    const finalData = {
        judul: null,
        subjudul: null,
        ket: null,
        equation: null,
        defp:null,
        defequ:null,
    };

    const openTags = ["(text)", "(h1)", "(h2)", "(equ)", "(defp)", "(defequ)"];
    const closeTags = ["/(text)", "/(h1)", "/(h2)", "/(equ)", "/(defp)","/(defequ)"];

    data.forEach((word, i) => {
        if (openTags.includes(word) || closeTags.includes(word)) {
            font.push(i);
        }
    });

    
    for (let i = 0; i < font.length; i += 2) {
        if (font[i + 1] === undefined) {
            continue;
        }

        const tagPembuka = data[font[i]]; 
        const indeksAwalKonten = font[i] + 1;
        const indeksAkhirKonten = font[i + 1];

        
        const kontenArray = data.slice(indeksAwalKonten, indeksAkhirKonten);
        const kontenString = kontenArray.join(" ");

        switch (tagPembuka) {
            case "(h1)":
                finalData.judul = kontenString;
                break;
            case "(h2)":
                finalData.subjudul = kontenString;
                break;
            case "(text)":
                finalData.ket = kontenString;
                break;
            case "(equ)":
                finalData.equation = kontenString;
                break;
              case "(defp)":
                finalData.defp = kontenString;
                break;
              case "(defequ)":
                finalData.defequ = kontenString;
        }
    }

    
    return finalData;
}



 // Pastikan path ini benar

// Ganti dengan ID dokumen yang sebenarnya
const idDokumen = 'eksponensial-dan-logaritma'; 

// 1. Buat referensi ke dokumen yang ingin di-update
const docRef = doc(db, 'matematika', idDokumen);



async function tambahDataKeArray(dataBaru) {
  try {
    await updateDoc(docRef, {
        "article.data": arrayUnion(dataBaru)
    });
    console.log("Data baru berhasil ditambahkan ke dalam array!");
    location.reload()
  } catch (error) {
    console.error("Terjadi error saat menambahkan data: ", error);
    alert(error)
  }
}



export default function Io(){
  const [loading, setLoading] = useState(false)
  const textareaRef = useRef(null);
  const [data, setData] = useState("")

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []); 


  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    const a = GenerateVariabel(data)
    tambahDataKeArray(a);
   
  }

  

  const handleInputChange = (e) => {
    const textarea = textareaRef.current;
    setData(e.target.value)

    
    if (textarea) {
      // Atur tinggi secara dinamis saat mengetik
      textarea.style.height = 'auto'; // Reset tinggi agar bisa mengecil
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
    return (
        <div className="font-sans my-4">
            <h1 className="text-2x">Developer mode</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    ref={textareaRef}
                    name="text"
                    id="myTextarea"
                    value={data}
                    onChange={handleInputChange}
                    rows="4" // Mulai dari 1 baris
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none overflow-hidden transition-height ease-in-out duration-150 ">

            </textarea>
            <button className="bg-blue-500 p-2 m-1 rounded-lg" type="submit">{loading?(<img src="/icon/loading.gif" className="h-14 w-16"/>):(<>Generate</>)}</button>
            </form>
            
        </div>
    )
}