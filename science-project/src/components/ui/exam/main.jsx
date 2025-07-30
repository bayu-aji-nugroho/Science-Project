"use client"; 

import { useState, useEffect } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import dataSoal from "@/components/ui/exam/data.json"


export default function HalamanUjian() {
  // State untuk melacak soal saat ini
  const [soalIndex, setSoalIndex] = useState(0);
  // State untuk menyimpan jawaban pengguna { soalId: pilihanIndex }
  const [jawabanPengguna, setJawabanPengguna] = useState({});
  // State untuk menampilkan skor akhir
  const [tampilkanSkor, setTampilkanSkor] = useState(false);
  // State untuk skor
  const [skor, setSkor] = useState(0);
  // State untuk timer (dalam detik)
  const [waktu, setWaktu] = useState(60); // 5 menit

  // Efek untuk menjalankan timer
  useEffect(() => {
    if (waktu > 0 && !tampilkanSkor) {
      const timerId = setTimeout(() => setWaktu(waktu - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (waktu === 0 && !tampilkanSkor) {
      // Waktu habis, otomatis selesaikan ujian
      selesaikanUjian();
    }
  }, [waktu, tampilkanSkor]);


  // Fungsi untuk memilih jawaban
  const handlePilihJawaban = (pilihanIndex) => {
    setJawabanPengguna({
      ...jawabanPengguna,
      [soalIndex]: pilihanIndex,
    });
  };

  // Fungsi untuk pindah ke soal berikutnya
  const handleSoalBerikutnya = () => {
    if (soalIndex < dataSoal.length - 1) {
      setSoalIndex(soalIndex + 1);
    } else {
      // Jika ini soal terakhir, selesaikan ujian
      selesaikanUjian();
    }
  };

  // Fungsi untuk pindah ke soal sebelumnya
  const handleSoalSebelumnya = () => {
    if (soalIndex > 0) {
      setSoalIndex(soalIndex - 1);
    }
  };

  // Fungsi untuk menghitung skor dan menyelesaikan ujian
  const selesaikanUjian = () => {
    let skorBenar = 0;
    dataSoal.forEach((soal, index) => {
      if (jawabanPengguna[index] === soal.jawabanBenar) {
        skorBenar++;
      }
    });
    setSkor((skorBenar / dataSoal.length) * 100);
    setTampilkanSkor(true);
  };
  
  // Fungsi untuk mengulang ujian
  const ulangUjian = () => {
      setSoalIndex(0);
      setJawabanPengguna({});
      setTampilkanSkor(false);
      setSkor(0);
      setWaktu(300); // Reset waktu
  }

  // Format waktu untuk ditampilkan
  const formatWaktu = (detik) => {
    const menit = Math.floor(detik / 60);
    const sisaDetik = detik % 60;
    return `${menit.toString().padStart(2, '0')}:${sisaDetik.toString().padStart(2, '0')}`;
  };

  // --- TAMPILAN ---
  
  // Tampilan Skor Akhir
  if (tampilkanSkor) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl text-center w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4">Ujian Selesai!</h2>
          <p className="text-xl mb-6">Skor Akhir Anda:</p>
          <p className="text-6xl font-bold text-green-400 mb-8">{skor.toFixed(0)}</p>
          <button
            onClick={ulangUjian}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  // Tampilan Soal Ujian
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-3xl">
        {/* Header Ujian */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-green-400">Ujian Matematika</h1>
          <div className="bg-gray-800 text-white text-lg font-semibold px-4 py-2 rounded-lg shadow-md">
            Sisa Waktu: {formatWaktu(waktu)}
          </div>
        </div>

        {/* Kotak Soal */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl">
          {/* Info Soal */}
          <div className="mb-6">
            <p className="text-lg font-semibold">
              Soal {soalIndex + 1} dari {dataSoal.length}
            </p>
            <div className="mt-4 text-sm md:text-xl leading-relaxed">
              <BlockMath math={`${dataSoal[soalIndex].soal}`}/>
              
            </div>
          </div>

          {/* Pilihan Jawaban */}
          <div className="space-y-3">
            {dataSoal[soalIndex].pilihan.map((pilihan, index) => {
              const isSelected = jawabanPengguna[soalIndex] === index;
              return (
                <button
                  key={index}
                  onClick={() => handlePilihJawaban(index)}
                  className={`
                    w-full text-left p-4 rounded-lg border-2 transition-all
                    ${isSelected 
                      ? 'bg-green-500 border-green-400 text-white font-bold' 
                      : 'bg-gray-700 border-gray-600 hover:bg-gray-600 hover:border-green-500'}
                  `}
                >
                  <InlineMath math={`${pilihan}`} /> 
                </button>
              );
            })}
          </div>
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handleSoalSebelumnya}
            disabled={soalIndex === 0}
            className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
          >
            Sebelumnya
          </button>
          <button
            onClick={handleSoalBerikutnya}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            {soalIndex === dataSoal.length - 1 ? 'Selesai' : 'Selanjutnya'}
          </button>
        </div>
      </div>
    </div>
  );
}
