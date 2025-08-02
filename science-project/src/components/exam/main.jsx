"use client"; 

import { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import dataSoal from "@/components/exam/data.json"
import MainPage from './mainpage';
import Skor from './skor';


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
  const [waktu, setWaktu] = useState(300); 
  

  // Efek untuk menjalankan timer
  useEffect(() => {
    if (waktu > 0 && !tampilkanSkor) {
      const timerId = setTimeout(() => setWaktu(waktu - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (waktu === 0 && !tampilkanSkor) {
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

  const handleSquere = (index)=>{
    setSoalIndex(index)
  }

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

  if (tampilkanSkor) {
    return (
      <Skor skor={skor} ulangUjian={ulangUjian}/>
    );
  }

  return (
    <MainPage waktu={waktu}
              soalIndex={soalIndex}
              jawabanPengguna={jawabanPengguna}
              handleSoalBerikutnya={handleSoalBerikutnya}
              handleSoalSebelumnya={handleSoalSebelumnya}
              handlePilihJawaban={handlePilihJawaban}
              handleSquere={handleSquere} />
  );
}
