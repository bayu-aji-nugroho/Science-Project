// components/DonationPage.js
"use client";

import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Donate() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className=" min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500">
        <div className="container mx-auto px-4 py-8 md:py-16">
            <div className='fixed bottom-14 right-14 md:bottom-16 md:right-16 bg-gradient-to-r from-purple-600  to-indigo-500 p-3 rounded-full'>
                <a href='#donate'><ArrowDown/></a>
            </div>

          {/* Tombol Toggle Dark Mode */}
          

          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-2">
              Buka Pintu Masa Depan Melalui Pendidikan
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Setiap donasi Anda sangat berarti untuk keberlangsungan website ini.
            </p>
          </header>

          <main>
            {/* Visi & Misi */}
            <section className="mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Visi Kami 👁️</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Menciptakan kesempatan bagi setiap orang memperoleh kesempatan yang sama untuk meraih potensi terbaiknya tanpa terkendala biaya.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Misi Kami 🎯</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Memberikan pengetahuan yang biasanya tidak dapat dijangkau secara gratis.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-300 dark:border-gray-700 my-12"/>

            {/* Alasan Kenapa Donasi Anda Penting */}
            <section className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Mengapa Donasi Anda Begitu Penting? 🤔</h2>
              <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">Memberi Kesempatan yang Sama untuk Setiap Orang.</h3>
                  <p className="text-gray-600 dark:text-gray-400">Anda memberikan kesempatan yang setara. Setiap rupiah dari Anda adalah bahan bakar untuk memastikan bahwa kecerdasan tidak akan pernah padam hanya karena faktor ekonomi. </p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">Mengubah Hafalan Menjadi Pemahaman dan Menyalakan Api Rasa Ingin Tahu.</h3>
                  <p className="text-gray-600 dark:text-gray-400">Dengan mendukung kami, Anda mendanai pembuatan konten yang menyalakan api rasa ingin tahu. Anda membantu seorang beralih dari sekadar penghafal menjadi seorang pemikir kritis. </p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Menjaga Platform Tetap Gratis dan Berkualitas</h3>
                  <p className="text-gray-600 dark:text-gray-400">ukungan Anda memastikan projek kami bisa terus beroperasi secara independen. Lebih dari itu, donasi Anda memungkinkan kami untuk tidak hanya bertahan, tetapi juga berkembang</p>
                </div>
              </div>
            </section>
            
            <hr className="border-gray-300 dark:border-gray-700 my-12"/>


            {/* Tombol Donasi */}
            <section className="text-center" id='donate'>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap Menjadi Bagian dari Visi Kami?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Satu langkah kecil dari Anda bisa menjadi lompatan besar bagi kami.
              </p>
              <a href='https://app.midtrans.com/payment-links/1754299889408' className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out text-xl">
                Donasi Sekarang ❤️
              </a>
            </section>
          </main>

        </div>
      </div>
    </div>
  );
}