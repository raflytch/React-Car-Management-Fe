import axiosInstance from "../api/axiosInstance";

const userById = async (id) => {
    try {
        const response = await axiosInstance.get(`/users/${id}`);
        return response.data.data.user;
    } catch (error) {
        throw error.response?.data?.message || "An error occurred";
    }
};

const updateUser = async (id, data) => {
    try {
        const response = await axiosInstance.patch(`/users/${id}`, data);
        return response.data.data;
    } catch (error) {
        throw error.response?.data?.message || "An error occurred";
    }
};

export { userById, updateUser };
