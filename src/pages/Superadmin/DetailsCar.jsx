import CarDetail from "../../components/Fragments/CarDetail";
import Navbar from "../../components/Fragments/Navbar";
import Footer from "../../components/Fragments/Footer";
import ProtectedRoute from "../../components/ProtectedRoute";
import useProtectedAll from "../../hooks/useProtectedAll";
import Button from "../../components/Elements/Buttons/Button";
import { useNavigate, useParams } from "react-router-dom";

const DetailsCar = () => {
    useProtectedAll(["admin", "superadmin"])
    const {id} = useParams()
    const navigate = useNavigate()

    const handleToUpdate = (id) => navigate(`/update-car/${id}`)

    return (
        <div>
            <CarDetail />
            <div>
                <Button onAction={handleToUpdate}>Edit</Button>

            </div>
        </div>
    )
}

export default DetailsCar