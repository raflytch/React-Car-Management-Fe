import React from "react";

const FAQ = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gray-100">
      <div className="col-span-1">
        <h2 className="text-3xl font-extrabold text-blue-600">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="mt-4 text-gray-700">
          Temukan jawaban atas pertanyaan umum seputar layanan penyewaan mobil
          kami di bawah ini.
        </p>
      </div>

      <div className="col-span-2 space-y-4">
        <details
          className="group bg-gray-50 p-6 rounded-xl [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Apa saja persyaratan untuk menyewa mobil?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Untuk menyewa mobil, Anda harus berusia minimal 21 tahun, memiliki
            SIM yang valid, dan kartu kredit untuk pembayaran deposit. Pastikan
            juga Anda memenuhi persyaratan umur sesuai dengan jenis mobil yang
            ingin disewa.
          </p>
        </details>

        <details className="group rounded-xl bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Apakah saya bisa mengubah atau membatalkan pemesanan?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Ya, Anda dapat mengubah atau membatalkan pemesanan hingga 24 jam
            sebelum waktu sewa yang dijadwalkan tanpa biaya pembatalan. Setelah
            itu, biaya pembatalan akan diterapkan sesuai dengan kebijakan kami.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
