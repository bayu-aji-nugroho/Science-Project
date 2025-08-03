"use client";
import { InlineMath, BlockMath } from 'react-katex';

const Page = ({waktu,soalIndex, jawabanPengguna,
     handleSoalSebelumnya,handleSoalBerikutnya, handlePilihJawaban, dataSoal})=>{


  const formatWaktu = (detik) => {
    const menit = Math.floor(detik / 60);
    const sisaDetik = detik % 60;
    return `${menit.toString().padStart(2, '0')}:${sisaDetik.toString().padStart(2, '0')}`;
  };

  
    return(
        <div className="bg-transparent text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">
              <div className="w-full max-w-3xl">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold text-green-400">Pretest Matematika</h1>
                  <div className="bg-gray-800 text-white text-lg font-semibold px-4 py-2 rounded-lg shadow-md">
                    Sisa Waktu: {formatWaktu(waktu)}
                  </div>
                </div>
        
                
                <div className="ring-2 ring-green-500 p-6 sm:p-8 rounded-2xl shadow-2xl">
                  <div className="mb-5">
                    <p className="text-lg font-semibold">
                      Soal {soalIndex + 1} dari {dataSoal.length}
                    </p>
                    <div className="mt-3 text-sm md:text-xl leading-relaxed overflow-x-auto">
                      <BlockMath math={`${dataSoal[soalIndex].soal}`}/>
                    </div>
                  </div>
        
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

export default function MainPage({waktu,soalIndex, jawabanPengguna,
     handleSoalSebelumnya,handleSoalBerikutnya, handlePilihJawaban, handleSquere, dataSoal}){
      return (
        <div className="md:flex  ">
          <div className="md:basis-1/4 lg:mr-4">
          <div className="md:grid md:grid-cols-4 m-5 md:my-10 hidden ">
            {
            dataSoal.map((_,i)=>{
              const isAnswered = Object.hasOwn(jawabanPengguna,i);
              return(
              <button onClick={() => handleSquere(i)} className={`cursor-pointer md:rounded-xl p-2 text-white flex justify-center items-center m-2 ring ring-gray-700 aspect-square
              ${isAnswered? 'bg-green-600 transition duration-200':"bg-transparent"} `}>
                {i+1}
              </button> )
     })
          }

          </div>
          
          
          </div>
          <div className="basis-3/4">
            <Page waktu={waktu} soalIndex={soalIndex} jawabanPengguna={jawabanPengguna}
                    handlePilihJawaban={handlePilihJawaban} handleSoalBerikutnya={handleSoalBerikutnya}
                    handleSoalSebelumnya={handleSoalSebelumnya} dataSoal={dataSoal} />
          </div>
          
        </div>
        
      )

    
     
}