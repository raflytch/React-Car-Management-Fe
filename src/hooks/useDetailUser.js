import { userById } from "../services/users.service";
import Swal from "sweetalert2";
import { useState } from "react";

const useDetailUser = (id) => {

    const [loading, setLoading] = useState(false);

    const userDetail = async () => {
        setLoading(true);
        await userById(id, (status, response) => {
            setLoading(false);
            if (status === "Success") {
                return response
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Get user data Failed",
                    text: response || "An error occurred during get data.",
                });
            }
        });
    }

    return {
        userDetail,
        loading
    }
}

export default useDetailUser;