'use client'

import { useEffect, useRef, useState } from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/lib/firebase/init"; // Pastikan path ini benar

/**
 * Mengurai string berformat tag menjadi objek soal ujian.
 * @param {string} text - String input dari textarea.
 * Contoh format:
 * (id) 1 /(id)
 * (soal) Rumus kimia air adalah... /(soal)
 * (opt) H2O /(opt)
 * (opt) CO2 /(opt)
 * (opt) O2 /(opt)
 * (ans) H2O /(ans)
 * @returns {object} Objek dengan struktur {id, soal, pilihan, jawabanBenar}.
 */
function GenerateExamVariable(text) {
    const fontIndexes = [];
    const data = text.split(" ");
    const finalData = {
        id: null,
        soal: null,
        pilihan: [], // Pilihan akan menjadi array
        jawabanBenar: null,
    };

    const openTags = ["(id)", "(soal)", "(opt)", "(ans)"];
    const closeTags = ["/(id)", "/(soal)", "/(opt)", "/(ans)"];

    // Menemukan indeks semua tag pembuka dan penutup
    data.forEach((word, i) => {
        if (openTags.includes(word) || closeTags.includes(word)) {
            fontIndexes.push(i);
        }
    });

    // Memproses setiap pasangan tag
    for (let i = 0; i < fontIndexes.length; i += 2) {
        if (fontIndexes[i + 1] === undefined) {
            continue; // Lompati jika tidak ada tag penutup
        }

        const tagPembuka = data[fontIndexes[i]];
        const indeksAwalKonten = fontIndexes[i] + 1;
        const indeksAkhirKonten = fontIndexes[i + 1];

        const kontenArray = data.slice(indeksAwalKonten, indeksAkhirKonten);
        const kontenString = kontenArray.join(" ");

        switch (tagPembuka) {
            case "(id)":
                finalData.id = kontenString;
                break;
            case "(soal)":
                // Menyimpan konten soal, termasuk format LaTeX
                finalData.soal = kontenString;
                break;
            case "(opt)":
                // Menambahkan setiap pilihan ke dalam array
                finalData.pilihan.push(kontenString);
                break;
            case "(ans)":
                finalData.jawabanBenar = Number(kontenString);
                break;
        }
    }

    return finalData;
}

/**
 * Menambahkan data soal baru ke dalam array di dokumen Firestore.
 * @param {object} dataBaru - Objek soal yang dihasilkan oleh GenerateExamVariable.
 * @param {DocumentReference} docRef - Referensi ke dokumen Firestore yang akan diupdate.
 */
async function addExamDataToArray(dataBaru, docRef) {
  try {
    // Ganti "questions" dengan nama field array di Firestore Anda
    await updateDoc(docRef, {
        exam: arrayUnion(dataBaru)
    });
    console.log("Data soal baru berhasil ditambahkan ke dalam array!");
    location.reload(); // Muat ulang halaman untuk melihat perubahan
  } catch (error) {
    console.error("Terjadi error saat menambahkan data soal: ", error);
    alert("Gagal menambahkan data: " + error.message);
  }
}

export default function IoExam({ idDokumen, collectionName }) {
  // Membuat referensi ke dokumen spesifik
  const docRef = doc(db, collectionName, idDokumen);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const textareaRef = useRef(null);

  // Efek untuk menyesuaikan tinggi textarea saat pertama kali render
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const parsedData = GenerateExamVariable(data);
    addExamDataToArray(parsedData, docRef).finally(() => {
        setLoading(false); // Pastikan loading berhenti meskipun terjadi error
    });
  };

  // Handler untuk perubahan input pada textarea
  const handleInputChange = (e) => {
    const textarea = textareaRef.current;
    setData(e.target.value);

    if (textarea) {
      // Atur tinggi secara dinamis saat mengetik
      textarea.style.height = 'auto'; // Reset tinggi agar bisa mengecil
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

    return (
        <div className="font-sans my-4 p-4 border rounded-lg shadow-md text-white">
            <h1 className="text-xl font-semibold mb-2">Exam Developer Mode</h1>
            <p className="text-sm text-gray-600 mb-4">
                Gunakan format tag untuk menambahkan soal. Contoh: `(id) 1 /(id) (soal) $2+2=?$ /(soal) (opt) 4 /(opt) (ans) 4 /(ans)`
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    ref={textareaRef}
                    name="text"
                    id="examTextarea"
                    value={data}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none overflow-hidden transition-height ease-in-out duration-150"
                    placeholder="Masukkan data soal di sini..."
                />
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-3 w-full flex justify-center items-center h-14" 
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <img src="/icon/loading.gif" alt="Loading..." className="h-12 w-14" />
                    ) : (
                        "Generate & Add Question"
                    )}
                </button>
            </form>
        </div>
    );
}