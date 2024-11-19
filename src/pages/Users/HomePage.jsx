import useProtectedAll from "../../hooks/useProtectedAll";
import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Fragments/Footer";
import DataMarquee from "../../components/Fragments/DataMarquee";
import Hero from "../../components/Fragments/Hero";
import FAQ from "../../components/Fragments/FAQ";
import CTA from "../../components/Fragments/CTA";

const HomePage = () => {
  useProtectedAll(["member"]);

  return (
    <div>
      <Navbar />
      <Hero />

      {/* Section: About Us */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Kami menyediakan layanan sewa mobil terbaik dengan berbagai pilihan
            kendaraan sesuai kebutuhan Anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
                <svg
                  className="w-8 h-8 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21V3m12 10h-3m0 0l-4-4m4 4l-4 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Banyak Pilihan Mobil
              </h3>
              <p className="text-gray-600">
                Pilih dari berbagai jenis mobil, mulai dari city car hingga SUV.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
                <svg
                  className="w-8 h-8 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m-3-7a4 4 0 00-3.828 2.828 4 4 0 01-7.945.428M12 3v1m0 16v1m-7-9h1m14 0h1m-7 7v-1m0-16v1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Harga Terjangkau
              </h3>
              <p className="text-gray-600">
                Nikmati layanan premium dengan harga yang sesuai kantong Anda.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-yellow-100 rounded-full">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-6.364 6.364m0 0l-6.364 6.364m6.364-6.364h7m-7-6.364v7m0 0l-6.364-6.364M12 12h7m0 0l-6.364 6.364M12 12l6.364-6.364"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Layanan 24/7
              </h3>
              <p className="text-gray-600">
                Kami selalu siap membantu kapan saja Anda membutuhkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Our Services */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
            Layanan Kami
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Kami menawarkan berbagai layanan sewa mobil yang fleksibel sesuai
            dengan kebutuhan perjalanan Anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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

      <CTA />

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Developer Kami
          </h2>
          <DataMarquee />
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
