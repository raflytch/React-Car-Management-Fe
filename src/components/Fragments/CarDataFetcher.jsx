import React, { useState } from "react";
import Button from "../Elements/Buttons/Button";
import Loading from "../Elements/Loading/Loading";

const CarDataFetcher = () => {
  const [carName, setCarName] = useState("");
  const [carStock, setCarStock] = useState("");
  const [CarData, setCarData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData("all");
  };

  const fetchData = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URI}?category=${category}`
      );
      const result = await response.json();
      setCarData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setCarData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className="flex flex-col md:flex-row items-end justify-center gap-6 p-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
          <div className="w-full md:w-72">
            <label
              htmlFor="carName"
              className="block text-sm font-semibold text-gray-700"
            >
              Car Name
            </label>
            <input
              type="text"
              id="carName"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              placeholder="Enter car name"
              className="mt-2 block w-full px-5 py-3 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-full md:w-40">
            <label
              htmlFor="carStock"
              className="block text-sm font-semibold text-gray-700"
            >
              Stock
            </label>
            <input
              type="number"
              id="carStock"
              value={carStock}
              onChange={(e) => setCarStock(e.target.value)}
              placeholder="Enter stock"
              className="mt-2 block w-full px-5 py-3 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <Button type="submit" color="red" width="auto">
          {loading ? "loading..." : "Search"}
        </Button>
      </form>

      <div className="flex items-center justify-center py-6 flex-wrap gap-4">
        <button
          onClick={() => fetchData("all")}
          type="button"
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-6 py-3 transition duration-300"
        >
          All categories
        </button>
        <button
          onClick={() => fetchData("shoes")}
          type="button"
          className="text-gray-900 border border-gray-300 hover:border-gray-200 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-6 py-3 transition duration-300"
        >
          Shoes
        </button>
        <button
          onClick={() => fetchData("bags")}
          type="button"
          className="text-gray-900 border border-gray-300 hover:border-gray-200 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-6 py-3 transition duration-300"
        >
          Bags
        </button>
        <button
          onClick={() => fetchData("electronics")}
          type="button"
          className="text-gray-900 border border-gray-300 hover:border-gray-200 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-6 py-3 transition duration-300"
        >
          Electronics
        </button>
        <button
          onClick={() => fetchData("gaming")}
          type="button"
          className="text-gray-900 border border-gray-300 hover:border-gray-200 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-6 py-3 transition duration-300"
        >
          Gaming
        </button>
      </div>

      <div className="py-6">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CarData.length > 0 ? (
              CarData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white border rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              ))
            ) : (
              <p>No data available.</p>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6">
      </div>
    </>
  );
};

export default CarDataFetcher;
