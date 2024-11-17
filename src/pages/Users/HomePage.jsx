import useProtectedAll from "../../hooks/useProtectedAll";
import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Fragments/Footer";
import DataMarquee from "../../components/Fragments/DataMarquee";
import Hero from "../../components/Fragments/Hero";

const HomePage = () => {
  useProtectedAll(["member"]);

  return (
    <div>
      <Navbar />
      <Hero />
      <DataMarquee />
      <Footer />
    </div>
  );
};

export default HomePage;
