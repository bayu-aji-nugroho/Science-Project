import { FaPhoneAlt, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Footer({bg}){
     const currentYear = new Date().getFullYear();

  return (
    <footer className={`${bg} text-white`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Bagian 1: Tentang & Logo */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Tentang Kami</h2>
            <p className="mt-2 text-gray-400">
             science project adalah projek yang mempunyai tujuan memberikan akses pengetahuan sains gratis untuk siapapun
            </p>
          </div>

          {/* Bagian 2: Link Navigasi */}
          <div className='hidden'>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Navigasi</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Beranda</a></li>
              <li><a href="/tentang" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="/layanan" className="hover:text-blue-400 transition-colors">Layanan</a></li>
              <li><a href="/kontak" className="hover:text-blue-400 transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Bagian 3: Kontak */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Kontak</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-3 text-gray-400"/>
                <a href="tel:+6281332678003" className="hover:text-blue-400 transition-colors">+62 813-3267-8003</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 text-gray-400"/>
                <a href="" className="hover:text-blue-400 transition-colors"></a>
              </li>
            </ul>
          </div>
          
          {/* Bagian 4: Media Sosial */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Ikuti Kami</h3>
            <div className="flex mt-4 space-x-5">
              <a href="https://www.instagram.com/ba_ngr_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="-" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {currentYear} bermatematika. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}