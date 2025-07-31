// components/VisionMission.jsx
import React from 'react';

const VisiMisi = () => {
  return (
    <div className="flex flex-col md:flex-row mt-16 md:w-1/2 md:mx-4 font-main">
          {/* Kolom Visi */}
          <div className="w-full  bg-gray-900 md:p-8 p-4 rounded-lg shadow-lg md:rounded-r-full">
            <h3 className="text-3xl font-semibold mb-4 text-green-400">Visi</h3>
            <p className="text-sm md:lg leading-relaxed text-gray-300">
              Menjadi platform terdepan dalam menyediakan pengetahuan secara gratis. Menciptakan penerus bangsa yang lebih cerah.
            </p>
          </div>

        
        </div>
  );
};

export default VisiMisi;