// /pages/donasi.js
// Pastikan Anda sudah menginstal dan mengkonfigurasi Tailwind CSS di proyek Next.js Anda.
"use client"
import { useState } from 'react';
import Head from 'next/head';

// Komponen Ikon sederhana untuk ilustrasi
const QrisIcon = () => <svg className="w-8 h-8 mx-auto mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h6v6H4V4zm0 10h6v6H4v-6zM14 4h6v6h-6V4zm0 10h6v6h-6v-6z" fill="currentColor"/></svg>;
const VirtualAccountIcon = () => <svg className="w-8 h-8 mx-auto mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v2H4V6zm0 12v-6h16v6H4z" fill="currentColor"/></svg>;
const EWalletIcon = () => <svg className="w-8 h-8 mx-auto mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-8h10V8H12v2zm4 4h-4v-2h4v2z" fill="currentColor"/></svg>;


export default function Donate() {
  // State untuk menyimpan pilihan nominal donasi
  const [selectedAmount, setSelectedAmount] = useState(100000);
  // State untuk nominal custom
  const [customAmount, setCustomAmount] = useState('');
  // State untuk metode pembayaran
  const [selectedPayment, setSelectedPayment] = useState('qris');
  // State untuk data diri
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '', anonymous: false });

  const donationAmounts = [50000, 100000, 250000, 500000, 1000000];
  const paymentMethods = [
    { id: 'qris', name: 'QRIS', icon: <QrisIcon /> },
    { id: 'va', name: 'Virtual Account', icon: <VirtualAccountIcon /> },
    { id: 'ewallet', name: 'E-Wallet', icon: <EWalletIcon /> },
  ];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Reset custom amount jika memilih nominal preset
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setSelectedAmount(null); // Reset pilihan preset
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = customAmount || selectedAmount;
    // Logika untuk proses donasi (misalnya: panggil API backend)
    alert(`
      Terima kasih atas donasi Anda!
      ==============================
      Nama: ${donorInfo.anonymous ? 'Hamba Allah' : donorInfo.name}
      Email: ${donorInfo.email}
      Jumlah: Rp ${new Intl.NumberFormat('id-ID').format(finalAmount)}
      Metode: ${selectedPayment.toUpperCase()}
      
      (Ini hanya simulasi, tidak ada transaksi nyata yang terjadi)
    `);
  };

  const finalAmount = customAmount || selectedAmount || 0;

  return (
    <>
      <Head>
        <title>Donasi untuk Pendidikan | Proyek Edukasi</title>
        <meta name="description" content="Bantu kami menyediakan akses pendidikan berkualitas untuk anak bangsa. Setiap donasi Anda sangat berarti." />
      </Head>

      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-300">
        <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
          
          {/* Bagian Header */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Dukung Misi Pendidikan Kami
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Setiap donasi Anda membantu kami menyediakan akses pendidikan berkualitas.
            </p>
          </div>

          {/* Form Donasi */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Bagian Pilih Nominal */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200">
                Pilih Nominal Donasi (IDR)
              </label>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {donationAmounts.map((amount) => (
                  <button
                    type="button"
                    key={amount}
                    onClick={() => handleAmountClick(amount)}
                    className={`p-3 rounded-lg border text-center font-medium transition-all duration-200 ${
                      selectedAmount === amount
                        ? 'bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-400 dark:ring-indigo-500'
                        : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 dark:hover:border-indigo-500'
                    }`}
                  >
                    {new Intl.NumberFormat('id-ID').format(amount)}
                  </button>
                ))}
                <input
                  type="text"
                  value={customAmount ? new Intl.NumberFormat('id-ID').format(customAmount) : ''}
                  onChange={handleCustomAmountChange}
                  placeholder="Nominal Lain"
                  className={`col-span-2 sm:col-span-3 p-3 rounded-lg border text-center font-medium transition-all duration-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none ${
                    customAmount
                      ? 'bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-400 dark:ring-indigo-500'
                      : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500'
                  }`}
                />
              </div>
            </div>

            {/* Bagian Metode Pembayaran */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200">
                Metode Pembayaran
              </label>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {paymentMethods.map((method) => (
                   <button
                    type="button"
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`p-3 rounded-lg border text-center font-medium transition-all duration-200 flex flex-col items-center justify-center text-gray-700 dark:text-gray-300 ${
                      selectedPayment === method.id
                        ? 'bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-400 dark:ring-indigo-500'
                        : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 dark:hover:border-indigo-500'
                    }`}
                  >
                    {method.icon}
                    <span className="text-sm">{method.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bagian Data Diri */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200">
                Lengkapi Data Diri
              </label>
              <div className="mt-3 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap Anda"
                  onChange={handleInputChange}
                  value={donorInfo.name}
                  disabled={donorInfo.anonymous}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none disabled:bg-gray-200 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  onChange={handleInputChange}
                  value={donorInfo.email}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="anonymous"
                    name="anonymous"
                    checked={donorInfo.anonymous}
                    onChange={handleInputChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="anonymous" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                    Donasi sebagai anonim (hamba Allah)
                  </label>
                </div>
              </div>
            </div>

            {/* Tombol Aksi */}
            <button
              type="submit"
              disabled={!finalAmount || !selectedPayment}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 dark:disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              {finalAmount > 0 
                ? `Lanjutkan Donasi Rp ${new Intl.NumberFormat('id-ID').format(finalAmount)}`
                : 'Pilih Nominal Donasi'
              }
            </button>
          </form>

        </div>
      </main>
    </>
  );
}