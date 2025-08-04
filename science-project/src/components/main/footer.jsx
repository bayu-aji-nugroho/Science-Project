import { FaPhoneAlt, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Footer({bg}){
     const currentYear = new Date().getFullYear();

  return (
    <footer className={`${bg} text-white mt-3 md:mt-5`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex grid grid-cols-1">
          
          
          <div className="mb-6 md:mb-0 basis-1/2">
            <h2 className="text-2xl font-bold text-blue-400">Tentang Kami</h2>
            <p className="mt-2 text-gray-400">
             science project adalah projek yang mempunyai tujuan memberikan akses pengetahuan sains gratis untuk siapapun
            </p>
          </div>

          <div className='grid grid-cols-2'>
            {/* Bagian 3: Kontak */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Kontak</h3>
            <ul className="m-4 space-y-3">
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-3 text-gray-400"/>
                <a href="https://wa.me/message/QKSS2RZRYSC6K1 " className="hover:text-blue-400 transition-colors">+62 813-3267-8003</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 text-gray-400"/>
                <div className="hover:text-blue-400 transition-colors">bayuanugroho81406@gmail.com</div>
              </li>
            </ul>
          </div>
          
          {/* Bagian 4: Media Sosial */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mx-3">Ikuti Kami</h3>
            <div className="m-4 space-x-5">
              <a href="https://www.instagram.com/ba_ngr_/" target="_blank" rel="noopener noreferrer" className="text-white flex m-3">
                <FaInstagram className="w-5 h-5 mr-3 " />
                <span className="">Instagram</span>
              </a>
              <a href="-" target="_blank" rel="noopener noreferrer" className="text-white flex m-3">
                <FaYoutube className="w-5 h-5 mr-3" />
                <span className="">YouTube</span>
              </a>
            </div>
          </div>

          </div>

          

        </div>
      </div>
    </footer>
  );
}