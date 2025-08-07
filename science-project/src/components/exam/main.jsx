"use client"; 

import { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
//import dataSoal from "@/components/exam/data.json"
import MainPage from './mainpage';
import Skor from './skor';


export default function HalamanUjian({dataSoal}) {

  const [soalIndex, setSoalIndex] = useState(0);
  const [jawabanPengguna, setJawabanPengguna] = useState({});
  const [tampilkanSkor, setTampilkanSkor] = useState(false);
  const [skor, setSkor] = useState(0);
  const [waktu, setWaktu] = useState(300); 
  

  useEffect(() => {
    if (waktu > 0 && !tampilkanSkor) {
      const timerId = setTimeout(() => setWaktu(waktu - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (waktu === 0 && !tampilkanSkor) {
      selesaikanUjian();
    }
  }, [waktu, tampilkanSkor]);



  const handlePilihJawaban = (pilihanIndex) => {
    setJawabanPengguna({
      ...jawabanPengguna,
      [soalIndex]: pilihanIndex,
    });
    
    
    
  };

  
  const handleSoalBerikutnya = () => {
    if (soalIndex < dataSoal.length - 1) {
      setSoalIndex(soalIndex + 1);
    } else {
     
      selesaikanUjian();
    }
  };

  const handleSquere = (index)=>{
    setSoalIndex(index)
  }

  
  const handleSoalSebelumnya = () => {
    if (soalIndex > 0) {
      setSoalIndex(soalIndex - 1);
    }
  };

  
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
  
 
  const ulangUjian = () => {
      setSoalIndex(0);
      setJawabanPengguna({});
      setTampilkanSkor(false);
      setSkor(0);
      setWaktu(300); 
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
              handleSquere={handleSquere} dataSoal={dataSoal}  />
  );
}
