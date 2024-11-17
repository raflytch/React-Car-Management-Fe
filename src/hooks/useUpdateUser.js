import { updateUser } from "../services/users.service";
import Swal from "sweetalert2";
import { useState } from "react";

const useUpdateUser = (id, data) => {

    const { loading, setLoading } = useState(false)

    const userUpdate = async () => {
        setLoading(true);
        await updateUser(id, data, (status, response) => {
            setLoading(false);
            if (status === "Success") {
                Swal.fire({
                    icon: "success",
                    title: "Update User Successful!",
                    text: "You have successfully new user data.",
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Update User Failed",
                    text: response,
                });
            }
        })
    }

    return {
        userUpdate,
        loading
    }
}

export default useUpdateUser;