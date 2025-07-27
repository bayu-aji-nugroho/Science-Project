export default function Data(){
    return (
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-xl">
      {/* Simbol (Anda bisa mengganti dengan ikon atau SVG) */}
      <div className="mb-4 text-purple-400 text-5xl flex justify-center md:justify-start">
        {/* Contoh simbol: Anda bisa pakai ikon dari library seperti Font Awesome, Heroicons, atau SVG kustom */}
        ✨
      </div>

      {/* Judul H1 */}
      <h1 className="text-4xl font-bold mb-4 text-purple-300">
        Judul Besar nan Menarik
      </h1>

      {/* Paragraf P */}
      <p className="text-lg leading-relaxed mb-6 text-gray-300">
        Ini adalah deskripsi atau paragraf yang menjelaskan konten dari bagian ini.
        Dengan tema gelap, konten ini akan menonjol dan memberikan kesan modern serta profesional.
        Pastikan untuk menyesuaikan teks ini sesuai kebutuhan Anda.
      </p>

      {/* Kumpulan div kecil-kecil (tag) yang rata kanan */}
      <div className="flex flex-wrap justify-end gap-2">
        {/* Tag 1 */}
        <div className="bg-gray-700 text-gray-100 text-sm px-3 py-1 rounded-full border border-purple-500">
          #NextJs
        </div>
        {/* Tag 2 */}
        <div className="bg-gray-700 text-gray-100 text-sm px-3 py-1 rounded-full border border-purple-500">
          #FrontendDev
        </div>
        {/* Tag 3 */}
        <div className="bg-gray-700 text-gray-100 text-sm px-3 py-1 rounded-full border border-purple-500">
          #TailwindCSS
        </div>
        {/* Tag 4 */}
        <div className="bg-gray-700 text-gray-100 text-sm px-3 py-1 rounded-full border border-purple-500">
          #Component
        </div>
        {/* Tag 5 */}
        <div className="bg-gray-700 text-gray-100 text-sm px-3 py-1 rounded-full border border-purple-500">
          #DarkTheme
        </div>
      </div>
    </div>
    )
}