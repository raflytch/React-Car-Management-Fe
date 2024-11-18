import React from 'react'

const CTA = () => {
  return (
    <div>
       {/* Section: Call to Action */}
       <section className="bg-blue-600 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memesan Mobil Anda?</h2>
          <p className="mb-8">
            Klik tombol di bawah ini untuk memulai perjalanan Anda bersama kami!
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-200">
            Pesan Sekarang
          </button>
        </div>
      </section>
    </div>
  )
}

export default CTA
