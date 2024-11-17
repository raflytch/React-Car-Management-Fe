import useProtected from "../../hooks/useProtected";
import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Fragments/Footer";
import DataMarquee from "../../components/Fragments/DataMarquee";
import Hero from "../../components/Fragments/Hero";

const HomePage = () => {
  useProtected();
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
