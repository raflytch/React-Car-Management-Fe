import CarDetail from "../../components/Fragments/CarDetail";
import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Fragments/Footer";
import ProtectedRoute from "../../components/ProtectedRoute";
import useProtectedAll from "../../hooks/useProtectedAll";
import Button from "../../components/Elements/Buttons/Button";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const DetailsCar = () => {
    useProtectedAll(["admin", "superadmin"])
    const {id} = useParams()
    const navigate = useNavigate()

    const handleToUpdate = () => navigate(`/dashboard/update-car/${id}`)
    const handleNext = () => navigate(`/dashboard/cars/${parseInt(id) + 1}`);
    const handlePrevious = () => {
        const previousId = parseInt(id) - 1;
        if (previousId > 0) {
            navigate(`/dashboard/cars/${previousId}`);
        }
    };

    return (
        <div>
            <div className="flex items-center gap-4 mb-6">
                <button
                    onClick={() => navigate("/dashboard/cars")}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <FaArrowLeft className="text-lg" />
                    Back
                </button>
            </div>
            <CarDetail />
            <div className="flex justify-between mt-6">
                    <button
                        onClick={handlePrevious}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={parseInt(id) <= 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleToUpdate}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-700"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                    >
                        Next
                    </button>
            </div>
        </div>
    )
}

export default DetailsCar