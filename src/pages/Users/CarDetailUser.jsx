import CarDetail from "../../components/Fragments/CarDetail";
import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Fragments/Footer";
import ProtectedRoute from "../../components/ProtectedRoute";
import useProtectedAll from "../../hooks/useProtectedAll";
import Button from "../../components/Elements/Buttons/Button";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const DetailsCarUser = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const handleNext = () => navigate(`/car/${parseInt(id) + 1}`);
    const handlePrevious = () => {
        const previousId = parseInt(id) - 1;
        if (previousId > 0) {
            navigate(`/car/${previousId}`);
        }
    };

    return (
        <div>
            <div className="flex items-center ml-10 pt-10">
                <button
                    onClick={() => navigate("/car")}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <FaArrowLeft className="text-lg" />
                    Back
                </button>
            </div>
            <CarDetail />
            <div className="flex items-center justify-between mt-8 space-x-[80vw] px-12">
                <Button
                    onAction={handlePrevious}
                    className="flex items-center justify-center px-3 py-3 text-sm font-medium text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 ease-in-out"
                    disabled={parseInt(id) <= 1}
                >
                    Previous
                </Button>
                <Button
                    onAction={handleNext}
                    className="flex items-center justify-center px-3 py-3 text-sm font-medium text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    Next
                </Button>
            </div>
        </div>
    )
}

export default DetailsCarUser