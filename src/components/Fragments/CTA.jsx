import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/Car');
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Siap Memesan Mobil Anda?
          </h2>
          <p className="text-lg font-medium">
            Klik tombol di bawah ini dan mulailah perjalanan Anda bersama kami hari ini!
          </p>
          <button className="mt-6 bg-white text-blue-600 font-bold text-lg px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          onClick={handleNavigate}
          >
            Pesan Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default CTA;
