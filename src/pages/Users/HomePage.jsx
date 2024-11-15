import useProtected from "../../hooks/useProtected";

const HomePage = () => {
  useProtected();
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello From Home Page</h1>
    </div>
  );
};

export default HomePage;
