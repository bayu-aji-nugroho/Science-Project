export default function Skor ({skor,ulangUjian}){
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
    )
}