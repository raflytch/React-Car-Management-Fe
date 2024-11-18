import { userById } from "../services/users.service";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const useDetailUser = (id) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    const userDetail = async () => {
        setLoading(true);
        try {
            const response = await userById(id);
            setUser(response);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Get user data Failed",
                text: error || "An error occurred during get data.",
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) userDetail();
    }, [id]);

    return {
        userDetail,
        loading,
        user,
    };
};


export default useDetailUser;