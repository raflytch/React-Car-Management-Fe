import CarDetail from "../../components/Fragments/CarDetail";
import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Fragments/Footer";
import ProtectedRoute from "../../components/ProtectedRoute";
import useProtectedAll from "../../hooks/useProtectedAll";

const DetailsCar = () => {
    useProtectedAll(["admin", "superadmin"])
    return (
        <div>
            <CarDetail />
        </div>
    )
}

export default DetailsCar