import useProtectedAll from "../../hooks/useProtectedAll";
import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Fragments/Footer";
import DataMarquee from "../../components/Fragments/DataMarquee";
import Hero from "../../components/Fragments/Hero";
import FAQ from "../../components/Fragments/FAQ";
import CTA from "../../components/Fragments/CTA";
import CompanyMarquee from "../../components/Fragments/CompanyMarquee";
import WhyChoose from "../../components/Fragments/WhyChoose";
import ConnectUs from "../../components/Fragments/ConnectUs";

const HomePage = () => {
  useProtectedAll(["member"]);

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="bg-gradient-to-r from-blue-50 to-white py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Trusted by over{" "}
            <span className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md">
              5,000+
            </span>{" "}
            Companies
          </h1>
          <p className="text-gray-500 mt-2">
            Leading organizations trust us for their success.
          </p>
        </div>
        <CompanyMarquee />
      </section>
      <WhyChoose />
      <ConnectUs />
      <CTA />
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our<span className="text-blue-600"> Developer</span>
          </h1>
          <DataMarquee />
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
