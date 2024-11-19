import React from "react";

const WhyChoose = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-50 via-white to-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4" id="why">
              Why Choose <span className="text-blue-600">Piplined?</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Trusted solutions designed to meet your needs.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 mb-16">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-5 rounded-full shadow-md transition transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11a1 1 0 011 1v9h-3a1 1 0 01-1-1v-7H5v7a1 1 0 01-1 1H1v-9a1 1 0 011-1h1zM16 9V5a1 1 0 011-1h4a1 1 0 011 1v4m-1 10H16"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Sewa Harian
              </h3>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-5 rounded-full shadow-md transition transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zM10 14h4v-2a4 4 0 10-4 0v2zM2 20h20"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Sewa Mingguan
              </h3>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-5 rounded-full shadow-md transition transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11a1 1 0 011 1v9h-3a1 1 0 01-1-1v-7H5v7a1 1 0 01-1 1H1v-9a1 1 0 011-1h1zM16 9V5a1 1 0 011-1h4a1 1 0 011 1v4m-1 10H16"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Sewa Bulanan
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16l4-4-4-4M16 8l4 4-4 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Sewa Harian
              </h3>
              <p className="text-gray-600">
                Layanan untuk perjalanan singkat, fleksibel, dan cepat sesuai
                kebutuhan harian Anda.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zM10 14h4v-2a4 4 0 10-4 0v2zM2 20h20"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Sewa Mingguan
              </h3>
              <p className="text-gray-600">
                Nikmati perjalanan jangka menengah dengan fleksibilitas dan
                kenyamanan ekstra.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11a1 1 0 011 1v9h-3a1 1 0 01-1-1v-7H5v7a1 1 0 01-1 1H1v-9a1 1 0 011-1h1zM16 9V5a1 1 0 011-1h4a1 1 0 011 1v4m-1 10H16"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Sewa Bulanan
              </h3>
              <p className="text-gray-600">
                Solusi ekonomis untuk kebutuhan jangka panjang dengan harga
                terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
