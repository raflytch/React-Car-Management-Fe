import useProtectedAll from "../../hooks/useProtectedAll";
import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Fragments/Footer";

const HomePage = () => {
  useProtectedAll(["member"]);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold">Hello From Home Page</h1>
      <Footer />
    </div>
  );
};

export default HomePage;
