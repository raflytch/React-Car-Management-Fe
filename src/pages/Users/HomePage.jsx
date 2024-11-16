import useProtected from "../../hooks/useProtected";
import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Fragments/Footer";

const HomePage = () => {
  useProtected();
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold">Hello From Home Page</h1>
      <Footer />
    </div>
  );
};

export default HomePage;
