import axiosInstance from "../api/axiosInstance";

const userById = async (params, callback) => {
    try {
        const response = await axiosInstance.get("/users", {
            params: {
                id: params
            }
        });
        const userData = response.data.data;
        callback("Success", userData)
    }
    catch (error) {
        const errorMessage = err.response?.data?.message || "An error occurred";
        callback("Error", errorMessage);
    }
}

const updateUser = async (params, data, callback) => {
    try {
        const response = await axiosInstance.patch("/users", data, {
            params: {
                id: params
            }
        });
        const userData = response.data.data;
        callback("Success", userData)
    }
    catch (error) {
        const errorMessage = err.response?.data?.message || "An error occurred";
        callback("Error", errorMessage);
    }
}

export { userById, updateUser }