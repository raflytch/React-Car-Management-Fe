import { updateUser } from "../services/users.service";
import Swal from "sweetalert2";
import { useState } from "react";

const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);

    const userUpdate = async (id, data) => {
        setLoading(true);
        try {
            const response = await updateUser(id, data);
            Swal.fire({
                icon: "success",
                title: "Update User Successful!",
                text: "You have successfully updated user data.",
            });
            return response; 
        } 
        catch (error) {
            Swal.fire({
                icon: "error",
                title: "Update User Failed",
                text: error?.response?.data?.message || error?.message || "An unknown error occurred.",
            });
            throw error; 
        } 
        finally {
            setLoading(false);
        }
    };

    return {
        userUpdate,
        loading,
    };
};

export default useUpdateUser;
